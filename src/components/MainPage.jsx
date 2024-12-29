import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cart from '../components/Cart';
import { useCart } from '../context/CartContext';
import SearchBar from '../components/SearchBar';
import '../css/mainpage.css';

const MainPage = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
  const { cart, addToCart } = useCart();
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    // Cargar los libros (simulación de fetch)
    const fetchedBooks = [
      { id: 1, title: "Bajo la misma estrella", author: "John Green" },
      { id: 2, title: "Orgullo y Prejuicio", author: "Jane Austen" },
      { id: 3, title: "El cuaderno de Noah", author: "Nicholas Sparks" },
      { id: 4, title: "A tres metros sobre el cielo", author: "Federico Moccia" },
      { id: 5, title: "Posdata: Te amo", author: "Cecelia Ahern" },
      { id: 6, title: "Los puentes de Madison", author: "Robert James Waller" },
      { id: 7, title: "Cumbres Borrascosas", author: "Emily Brontë" },
      { id: 8, title: "Amor en los tiempos del cólera", author: "Gabriel García Márquez" },
      { id: 9, title: "Como agua para chocolate", author: "Laura Esquivel" },
      { id: 10, title: "Jane Eyre", author: "Charlotte Brontë" }
  ];
    setBooks(fetchedBooks);
    setFilteredBooks(fetchedBooks);
  }, []);

  const handleSearch = (query) => {
        const lowerCaseQuery = query.toLowerCase();
        const filtered = books.filter((book) =>
            book.title.toLowerCase().includes(lowerCaseQuery)
        );
        setFilteredBooks(filtered);
    };
  
  const handleBookClick = (book) => {
    navigate(`/book/${book.id}`,{ state: { book } });
  };

  return (
    <div className="MainPage">
      <SearchBar onSearch={handleSearch} />
      <div className="book-list">
        {filteredBooks.map(book => (
          <div 
            key={book.id} 
            className="book-item" 
            onClick={() => handleBookClick(book)}
          >
            <h3>{book.title}</h3>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
      <Cart cart={cart}/>
    </div>
  );
};

export default MainPage;
