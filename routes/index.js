const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('index', {page: 'Home'});
});

router.get('/about', (req, res, next) => {
  res.render('index', {page: 'About'});
});

router.get('/contact-me', (req, res, next) => {
  res.render('index', {page: 'Contact Me'});
});

router.get('/windows', (req, res, next) => {
  res.render('windows', {page: 'Windows'});
});
router.get('/404', (req, res, next) => {
  res.render('404', {page: '404'});
});
router.get('/projects', (req, res, next) => {
  res.render('projects', {page: 'Projects'});
});

module.exports = router;
