const express = require('express');
const app = express();
const router = express.Router();
const { welcome , getmovies } = require('../controllers/moviecontroller');
router.get('/',welcome);
router.get('/api/movies', getmovies);

module.exports = router;
