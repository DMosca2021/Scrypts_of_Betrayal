const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    res.render('home', {
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/about', async (req, res) => {
  try {
    res.render('about', {
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/howto', async (req, res) => {
  try {
    res.render('howto', {
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/profile', async (req, res) => {

  try {
    res.render('profile',{
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/game', async (req, res) => {
  try {
    res.render('game', {
      // logged_in: req.session.logged_in
      
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/feedback', async (req, res) => {
  try {
    res.render('feedback', {
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;


