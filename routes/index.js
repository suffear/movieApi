const express = require('express');
const router = express.Router();

// Serve index.html for the root route
router.get('/documentation', function(req, res, next) {
  res.render('documentation')
});
// Serve documentation.html for the /documentation route
router.get('/', function(req, res, next) {
  res.render('index')
});



module.exports = router;
