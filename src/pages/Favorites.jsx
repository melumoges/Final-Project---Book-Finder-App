import React, { useEffect, useContext } from "react";
import { BookContext } from "../context/BookContext.jsx";
import BookCard from "../components/BookCard.jsx"; 

function Favorites() {
  const { favorites, loadFavorites } = useContext(BookContext);

  useEffect(() => {
    loadFavorites();
  }, []); 

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.map((book) => (
        <BookCard key={book.id} book={book} showAdd={false} />
      ))}
    </div>
  );
}

export default Favorites; 
