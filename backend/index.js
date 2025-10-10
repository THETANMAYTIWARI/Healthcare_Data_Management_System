require('dotenv').config({ path: './config.env' });
const express = require('express');
const path = require('path');
const fs = require('fs').promises;
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors({ origin: process.env.FRONTEND_URL }));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));

const dataDir = path.join(__dirname, 'data');

const allowed = {
  appointments: 'test.appointments.json',
  clinics: 'test.clinics.json',
  doctors: 'test.doctors.json',
  healthlogs: 'test.healthlogs.json',
  prescriptions: 'test.prescriptions.json',
  symptomjournals: 'test.symptomjournals.json'
};

app.get('/api/:resource', async (req, res) => {
  const r = req.params.resource;
  const filename = allowed[r];
  if (!filename) return res.status(404).json({ error: 'Not found' });
  try {
    const full = path.join(dataDir, filename);
    const text = await fs.readFile(full, 'utf8');
    res.type('application/json').send(text);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to read file' });
  }
});

app.get('/', (req, res) => res.send('HealthCare backend running'));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on ${port}`));
