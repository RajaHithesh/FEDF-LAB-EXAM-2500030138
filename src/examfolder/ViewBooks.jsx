import React, { useEffect, useState } from 'react';

const ViewBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem('bookRegistrations')) || [];
    setBooks(storedBooks);
  }, []);

  if (books.length === 0) {
    return <h2>No books registered yet.</h2>;
  }

  return (
    <div>
      <h1>Registered Books</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Description</th>
            <th>Year</th>
            <th>Category</th>
            <th>Pages</th>
            <th>Registered At</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={index}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.description}</td>
              <td>{book.year}</td>
              <td>{book.category}</td>
              <td>{book.pages}</td>
              <td>{book.registeredAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewBooks;