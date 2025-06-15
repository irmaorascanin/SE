const express = require('express');
const path = require('path');
const app = express();

// Serve static frontend files from public/
app.use(express.static(path.join(__dirname, 'public')));

// Middleware for JSON
app.use(express.json());

// API routes
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

app.post('/api/echo', (req, res) => {
  res.json({ message: req.body.message });
});

// Serve index.html on root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Catch-all 404
app.use((req, res) => {
  res.status(404).send('Not Found');
});

module.exports = app;