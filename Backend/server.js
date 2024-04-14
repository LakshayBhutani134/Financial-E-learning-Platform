// server.js
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

// Create connection to MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'kohli6639',
  database: 'sample'
});

// Connect
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL connected');
});

// Fetch data from MySQL
app.get('/api/modules', (req, res) => {
  const sql = 'SELECT * FROM modules';
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error fetching modules:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    console.log('Modules:', result); // Logging the result
    res.json(result);
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
