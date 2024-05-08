import React, { useState } from "react";

const BookSearch = ({ books }) => {
    
  const [searchQuery, setSearchQuery] = useState({
    author: '',
    title: '',
    country: '',
    language: '',
    year: ''
  });

  const handleSearch = (e) => {
    const { name, value } = e.target;
    setSearchQuery((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const filteredBooks = books.filter(book => {
    return Object.keys(searchQuery).every(key => {
      if (key === 'year') {
        return !searchQuery[key] || book[key].toString().includes(searchQuery[key].toString());
      }
      return !searchQuery[key] || book[key].toLowerCase().includes(searchQuery[key].toLowerCase());
    });
  });

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop:"20px" }}>
    <div style={{display:"flex" , gap:"20px"}}>
      <div style={{ marginBottom: "10px" }}>
        <label>Author:</label>
        <input onChange={handleSearch} name="author" data-testid="author" />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label>Title:</label>
        <input onChange={handleSearch} name="title" data-testid="title" />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label>Country:</label>
        <input onChange={handleSearch} name="country" data-testid="country" />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label>Language:</label>
        <input onChange={handleSearch} name="language" data-testid="language" />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label>Year:</label>
        <input onChange={handleSearch} name="year" data-testid="year" />
      </div>
      </div>
      <ul style={{ padding: 0, margin: 50 }}>
        {filteredBooks.map((book, index) => (
          <li key={index}>
            <strong>{book.title}</strong> by {book.author} ({book.country}, {book.language}, {book.year})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookSearch;
