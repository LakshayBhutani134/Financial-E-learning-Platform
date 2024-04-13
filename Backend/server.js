// server.js
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'kohli6639',
  database: 'sample',
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL database');
});

app.get('/api/data', (req, res) => {
  const query = 'SELECT * FROM stock_data';
  db.query(query, (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(result);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
