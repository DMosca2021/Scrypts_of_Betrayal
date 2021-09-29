const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    res.render('home');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/about', async (req, res) => {
  try {
    res.render('about');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/howto', async (req, res) => {
  try {
    res.render('howto');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/profile', async (req, res) => {
  try {
    res.render('profile');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/game', async (req, res) => {
  try {
    res.render('game');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/feedback', async (req, res) => {
  try {
    res.render('feedback');
  } catch (err) {
    res.status(500).json(err);
  }
});



