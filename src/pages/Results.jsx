import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
import BookCard from "../components/BookCard";

function Results() {
  const { books, loading, error } = useContext(BookContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Search Results</h2>
      {books.map((book) => (
        <BookCard key={book.id} book={book} showAdd={true} />
      ))}
    </div>
  );
}

export default Results;
