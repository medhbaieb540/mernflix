const express = require('express');
const app = express();
const router = express.Router();
const { welcome , getmovies , getmoviesid } = require('../controllers/moviecontroller');
router.get('/',welcome);
router.get('/api/movies', getmovies);
router.get('/api/movies/:id', getmoviesid);

module.exports = router;
