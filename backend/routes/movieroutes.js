const express = require('express');
const router = express.Router();
const { welcome , getmovies , getmoviesid } = require('../controllers/moviecontroller');
router.get('/',welcome);
router.get('/movies', getmovies);
router.get('/movies/:id', getmoviesid);

module.exports = router;
