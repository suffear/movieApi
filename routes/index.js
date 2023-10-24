const express = require('express');
const router = express.Router();
const createError = require('http-errors');
const app = require('../app.js');
const movies = require('../data/movies.js');

// Serve index.html for the root route
router.get('/documentation', function(req, res, next) {
  res.render('documentation')
});

// serve movies.js for the /movies route
router.get('/movies', function(req, res, next) {
  res.render('data', { title: 'Movies', header: 'Movies', items: movies });
});



// Serve modified movies.js for the /top10movies route
router.get('/top10movies', (req, res) => {
  const sortedMovies = movies.sort((a, b) => {return b.rating - a.rating;});
  const top10Movies = sortedMovies.slice(0, 10);

  res.render('data', { title: 'Top 10 Rated Movies', header: 'Top 10 Rated Movies', items: top10Movies });
});

// Serve documentation.html for the /documentation route
router.get('/', function(req, res, next) {
  res.render('index')
});

// Page not found handler
router.get('/notfound', (req, res, next) => {
  next(createError(404, 'Page not found'));
});

module.exports = router;
