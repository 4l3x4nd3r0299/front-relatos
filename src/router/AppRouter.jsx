import React, { useState } from 'react';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import Login from '../components/Login';
import LandingPage from '../components/LandingPage';
import MainPage from '../components/MainPage';
import BookPage from '../components/BookPage';
import Cart from '../components/Cart';
import Checkout from '../components/Checkout';
import { CartProvider } from '../context/CartContext';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

function AppRouter() {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLogin = () => {
        setIsAuthenticated(true);
    };

    const handleLogout = () => {
        setIsAuthenticated(false); 
    };

    return (
        <CartProvider>
            <BrowserRouter>
                {!isAuthenticated ? (
                    <Routes>
                        <Route path="/login" element={<Login onLogin={handleLogin} />} />
                        <Route path="*" element={<Navigate to="/login" replace />} />
                    </Routes>
                    ) : (
                    <>
                        <Menu />
                        <main>
                            <Routes>
                                <Route path="/" element={<LandingPage />} />
                                <Route path="/main" element={<MainPage />} />
                                <Route path="/book/:id" element={<BookPage />} />
                                <Route path="/cart" element={<Cart />} />
                                <Route path="/checkout" element={<Checkout />} />
                                <Route path="/logout" element={<Navigate to="/" replace />} />
                                <Route path="*" element={<Navigate to="/" replace />} />
                            </Routes>
                        </main>
                        <Footer />
                    </>
                    )}
            </BrowserRouter>
        </CartProvider>
    );
}

export default AppRouter;
