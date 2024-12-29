import React, { useEffect,useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Cart from '../components/Cart';
import '../css/book.css';

const BookPage = () => {
  const { id } = useParams();
  const { cart, addToCart } = useCart();
  const location = useLocation();
  const [book, setBook] = useState(location.state?.book || null);

  useEffect(() => {
    if (!book) {
      setBook({ id, title: "Bajo la misma estrella", author: "John Green" });
    }
  }, [id, book]);

  return (
    <div className="book-detail">
      {book ? (
        <>
          <h1>{book.title}</h1>
          <p>{book.author}</p>
          <p>{book.description || 'Descripción no disponible'}</p>
          <button onClick={() => addToCart(book)}>Añadir al carrito</button>

          <Cart cart={cart}/>
        </>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default BookPage;
