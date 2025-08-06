const db = require("../config/db");

const BookModel = {
  // Search books by title or author
  searchBooks: (query, callback) => {
    db.query(
      `SELECT id, title, author, description, published_year, cover_image_url 
       FROM books 
       WHERE LOWER(title) LIKE LOWER(?) OR LOWER(author) LIKE LOWER(?)`,
      [`%${query}%`, `%${query}%`],
      callback
    );
  },

  // Get list of favorite books
  getFavorites: (callback) => {
    db.query(
      `SELECT books.id, books.title, books.author, books.description, books.published_year, books.cover_image_url
       FROM favorites
       JOIN books ON books.id = favorites.book_id`,
      callback
    );
  },

  // Add to favorites, avoid duplicates
  addFavorite: ( book_id, callback) => {
    db.query(
      `INSERT IGNORE INTO favorites (book_id) VALUES (?)`,
      [ book_id],
      callback
    );
  },

  // Remove from favorites by book_id
  removeFavorite: ( book_id, callback) => {
    db.query(
      `DELETE FROM favorites WHERE book_id = ?`,
      [ book_id],
      callback
    );
  },
};

module.exports = BookModel;
