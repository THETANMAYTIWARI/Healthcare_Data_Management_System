require('dotenv').config({ path: './config.env' });
const express = require('express');
const path = require('path');
const fs = require('fs').promises;
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const app = express();
app.use(cors({ origin: process.env.FRONTEND_URL })); // Your frontend URL
app.use(express.json()); // Parse JSON bodies

// ===== MongoDB connection =====
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));

// ===== MongoDB User Schema =====
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String
});
const User = mongoose.model('User', userSchema);

// ===== JSON files API =====
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

// ===== User signup =====
app.post('/api/signup', async (req, res) => {
  const { name, email, password } = req.body;
  if (!email || !password || !name) {
    return res.status(400).json({ error: 'Name, email, and password are required' });
  }
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ name, email, password: hashedPassword });
    res.json({ message: 'Signup successful', user: { name: newUser.name, email: newUser.email } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'User creation failed' });
  }
});

// ===== User login =====
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ error: 'Invalid email or password' });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ error: 'Invalid email or password' });

    res.json({ message: 'Login successful', user: { name: user.name, email: user.email } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Login failed' });
  }
});

// ===== Health check =====
app.get('/', (req, res) => res.send('HealthCare backend running'));

// ===== Start server =====
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on ${port}`));
