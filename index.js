require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5002;

// Connect to MySQL (using mysql2)
const db = require('./config/db');
const bookController = require('./controllers/bookController');

app.use(cors());
app.use(express.json());

// Routes
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is working!' });
});

app.get('/api/books/search', bookController.searchBooks);
app.get('/api/books/favorites', bookController.getFavorites);
app.post('/api/books/favorites', bookController.addFavorite);
app.delete('/api/books/favorites/:id', bookController.removeFavorite);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
