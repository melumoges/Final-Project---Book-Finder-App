import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";

function BookCard({ book, showAdd }) {
  const { addFavorite, removeFavorite } = useContext(BookContext);

  return (
    <div className="book-card">
      <img src={book.cover_image_url} alt={book.title} width={100} />
      <h3>{book.title}</h3>
      <p>{book.author} ({book.year})</p>
      <p>{book.description}</p>
      {showAdd ? (
        <button onClick={() => addFavorite(book.id)}>Add to Favorites</button>
      ) : (
        <button onClick={() => removeFavorite(book.id)}>Remove</button>
      )}
    </div>
  );
}

export default BookCard;
