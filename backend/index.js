// backend/index.js
const express = require('express');
const path = require('path');
const fs = require('fs').promises;
const cors = require('cors');

const app = express();
app.use(cors()); // in production restrict origin to your Vercel URL

const dataDir = path.join(__dirname, 'data');

// Allowed base names (safer than exposing arbitrary files)
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

// Health check
app.get('/', (req, res) => res.send('HealthCare backend running'));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on ${port}`));
