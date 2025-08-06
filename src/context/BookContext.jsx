import React, { createContext, useState } from "react";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchBooks = async (query) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`http://localhost:5002/api/books/search?q=${query}`);
      const data = await res.json();
      setBooks(data);
    } catch (err) {
      setError("Search failed.");
    } finally {
      setLoading(false);
    }
  };

  const loadFavorites = async () => {
    try {
      const res = await fetch(`http://localhost:5002/api/books/favorites`);
      const data = await res.json();
      setFavorites(data);
    } catch (err) {
      console.error("Failed to load favorites", err);
    }
  };

  const addFavorite = async (book_id) => {
    await fetch(`http://localhost:5002/api/books/favorites`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ book_id }),
    });
    loadFavorites();
  };

  const removeFavorite = async (id) => {
    await fetch(`http://localhost:5002/api/books/favorites/${id}`, {
      method: "DELETE",
    });
    loadFavorites();
  };

  return (
    <BookContext.Provider
      value={{
        books,
        favorites,
        loading,
        error,
        searchBooks,
        addFavorite,
        removeFavorite,
        loadFavorites,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
