import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../css/carrito.css';

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleCart = () => {
    setIsOpen(prevState => !prevState);
  };

  const proceedToCheckout = () => {
    if (cart.length > 0) {
      navigate('/checkout', { state: { cart } });
    } else {
      alert('El carrito está vacío, no puedes proceder al pago.');
    }
  };

  return (
    <div>
     <button className="cart-toggle" onClick={toggleCart}>
      <i className="fas fa-shopping-cart"></i>
     </button>

      <div className={`cart ${isOpen ? 'open' : ''}`} >
        <h3>Carrito</h3>
        {cart.length === 0 ? (
          <p>El carrito está vacío.</p>
        ) : (
          <ul>
            {cart.map((book) => (
              <li key={book.id}>
                <p>{book.title}</p>
                <button onClick={() => removeFromCart(book.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
        )}
        <button onClick={proceedToCheckout}>Proceder al pago</button>
      </div>
    </div>
  );
};

export default Cart;
