import React, { useState } from 'react';


import './style.css';

const BookRegistration = () => {
  const [bookData, setBookData] = useState({
    title: '',
    author: '',
    description: '',
    year: '',
    category: '',
    pages: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData({
      ...bookData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingBooks = JSON.parse(localStorage.getItem('bookRegistrations')) || [];
    const exists = existingBooks.find(
      (book) => book.title.toLowerCase() === bookData.title.toLowerCase()
    );
    if (exists) {
      return;
    }
    const newBook = {
      ...bookData,
      registeredAt: new Date().toLocaleString(),
    };
    existingBooks.push(newBook);
    localStorage.setItem('bookRegistrations', JSON.stringify(existingBooks));
    setBookData({
      title: '',
      author: '',
      description: '',
      year: '',
      category: '',
      pages: '',
    });
  };

  return (
    <div>
      
      <form onSubmit={handleSubmit}>
        <h1>Book Registration</h1>
        <div className='container'>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={bookData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Author</label>
          <input
            type="text"
            name="author"
            value={bookData.author}
            onChange={handleChange}
            required
          />
        </div>

       
        <div>
          <label> published Year</label>
          <input
            type="number"
            name="year"
            value={bookData.year}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Category</label>
          <input
            type="text"
            name="category"
            value={bookData.category}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Number of Pages</label>
          <input
            type="number"
            name="pages"
            value={bookData.pages}
            onChange={handleChange}
          />
        </div>


         <div>
          <label>Description</label>
          <textarea
            name="description"
            value={bookData.description}
            onChange={handleChange}
          />
        </div>


        <button type="submit">Register Book</button>
      </form>
    </div>
  );
};

export default BookRegistration;