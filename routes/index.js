const express = require('express');
const router = express.Router();

// Serve index.html for the root route
router.get('/', (req, res) => {
  res.sendFile(__dirname + '/../public/index.html');
});

// Serve documentation.html for the /documentation route
router.get('/documentation', (req, res) => {
  res.sendFile(__dirname + '/../public/documentation.html');
});


module.exports = router;
