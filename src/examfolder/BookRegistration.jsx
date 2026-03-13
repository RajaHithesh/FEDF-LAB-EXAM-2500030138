import React, { useState } from 'react';

export default function BookRegistration() {
  const [book, setBook] = useState({
    nameOfBook: "",
    author: "",
    title: "",
    noOfPages: "",
    publicationYear: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const existing = JSON.parse(localStorage.getItem('BookRegistrations')) || [];

    const exists = existing.find(
      (books) => books.title === book.title && books.author === book.author
    );

    if (exists) {
      alert("This book is already registered..!!");
      return;
    }

    const newBook = { ...book };
    existing.push(newBook);
    localStorage.setItem('BookRegistrations', JSON.stringify(existing));
    alert('Book was registered successfully..!');

    setBook({
      nameOfBook: "",
      author: "",
      title: "",
      noOfPages: "",
      publicationYear: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Book Registration</h1>

        <div>
          <label>Name of the Book:</label>
          <input
            type="text"
            value={book.nameOfBook}
            onChange={(e) => setBook({ ...book, nameOfBook: e.target.value })}
            required
          />
        </div>

        <div>
          <label>Author:</label>
          <input
            type="text"
            value={book.author}
            onChange={(e) => setBook({ ...book, author: e.target.value })}
            required
          />
        </div>

        <div>
          <label>Title:</label>
          <input
            type="text"
            value={book.title}
            onChange={(e) => setBook({ ...book, title: e.target.value })}
            required
          />
        </div>

        <div>
          <label>No. of Pages:</label>
          <input
            type="number"
            value={book.noOfPages}
            onChange={(e) => setBook({ ...book, noOfPages: e.target.value })}
            required
          />
        </div>

        <div>
          <label>Publication Year:</label>
          <input
            type="number"
            value={book.publicationYear}
            onChange={(e) => setBook({ ...book, publicationYear: e.target.value })}
            required
          />
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}