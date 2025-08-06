const express = require('express');
const router = express.Router();
const BookController = require('../controllers/bookController');

// Define all routes here
router.get('/search', BookController.searchBooks);
router.get('/favorites', BookController.getFavorites);
router.post('/favorites', BookController.addFavorite);
router.delete('/favorites/:id', BookController.removeFavorite);

module.exports = router;

