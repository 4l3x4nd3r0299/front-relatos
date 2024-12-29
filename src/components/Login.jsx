import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/login.css';

function Login({ onLogin }) {
    const navigate = useNavigate();

    const handleLogin = () => {
        onLogin(); 
        navigate('/');
    };

    return (
        <div className="login">
            <h2>Login</h2>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;
