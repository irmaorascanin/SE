const express = require('express');
const app = express();

app.use(express.json());

// Test ruta
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

// Echo ruta
app.post('/api/echo', (req, res) => {
  res.json({ message: req.body.message });
});

// Catch-all za 404
app.use((req, res) => {
  res.status(404).send('Not Found');
});

module.exports = app;