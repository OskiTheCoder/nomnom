const functions = require('firebase-functions');

const express = require('express');
const cors = require('cors');

const app = express();

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

app.get('/hithere', (req, res) => {
  res.json({ message: 'hello from a cloud function' });
});

exports.test = functions.https.onRequest(app);
