const BookModel = require("../models/bookModel");

exports.searchBooks = (req, res) => {
  const { q } = req.query;
  const trimmedQuery = q?.trim(); // Optional chaining to avoid crashing on undefined

  if (!trimmedQuery) {
    return res.status(400).json({ error: "Missing search query" });
  }

  BookModel.searchBooks(trimmedQuery, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.getFavorites = (req, res) => {
  BookModel.getFavorites((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.addFavorite = (req, res) => {
  const { book_id } = req.body;
  if (!book_id) return res.status(400).json({ error: "Missing book_id" });

  BookModel.addFavorite(book_id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: "Added to favorites" });
  });
};

exports.removeFavorite = (req, res) => {
  BookModel.removeFavorite(req.params.id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Deleted from favorites" });
  });
}; 