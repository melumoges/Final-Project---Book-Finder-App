import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BookContext } from "../context/BookContext";



function SearchBar() {
  const [query, setQuery] = useState("");
  const { searchBooks } = useContext(BookContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();
  if (!query.trim()) return;
  await searchBooks(query); // wait for search to complete
  navigate("/results");
};

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search books..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
