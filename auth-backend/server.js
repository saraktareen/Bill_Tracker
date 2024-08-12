const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

// Create a new SQLite database (or connect to existing one)
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
  db.run(`CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE,
    password TEXT
  )`);
});

// Signup endpoint
app.post('/signup', (req, res) => {
  const { email, password } = req.body;
  db.run('INSERT INTO users (email, password) VALUES (?, ?)', [email, password], (err) => {
    if (err) {
      return res.status(400).json({ message: 'User already exists' });
    }
    res.status(201).json({ message: 'User created' });
  });
});

// Login endpoint
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  db.get('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (err, row) => {
    if (err) {
      return res.status(500).json({ message: 'Internal server error' });
    }
    if (!row) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
    res.status(200).json({ message: 'Login successful' });
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
