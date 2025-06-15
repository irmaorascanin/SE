const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

app.post('/api/echo', (req, res) => {
  res.json({ message: req.body.message });
});

// Catch-all 404 handler
app.use((req, res) => {
  res.status(404).send('Not Found');
});

module.exports = app;