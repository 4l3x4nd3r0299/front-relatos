import React from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../css/checkout.css';

const Checkout = () => {
    const location = useLocation();
    const { clearCart } = useCart();
    const { cart } = location.state || {};
    const history = useNavigate();

    const handlePayment = () => {
        alert('Pago realizado con éxito');
        clearCart();
        history('/main');
    };

    return (
        <div className="checkout">
        <h2>Resumen del Pedido</h2>
        {cart.length === 0 ? (
            <p className="empty-cart">El carrito está vacío.</p>
        ) : (
            <div>
            <ul>
                {cart.map((book) => (
                <li key={book.id}>
                    <p>{book.title}</p>
                    <p>{book.author}</p>
                </li>
                ))}
            </ul>
            <button onClick={handlePayment}>Pagar</button>
            </div>
        )}
        </div>
    );
};

export default Checkout;
