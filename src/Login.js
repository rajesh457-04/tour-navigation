import React, { useState, useContext } from 'react';
import './style5.css'; // Ensure this points to your CSS file
import axios from 'axios';
import { store } from './App';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [, setToken] = useContext(store); // Get the setToken function from context
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/login', { email, password });
            setToken(res.data.token); // Set token in context
            localStorage.setItem('token', res.data.token); // Store token in localStorage
            localStorage.setItem('isAuthenticated', 'true'); // Set authenticated flag
            alert('Login successful');
            navigate('/myprofile'); // Redirect to profile after login
        } catch (error) {
            alert(error.response.data);
        }
    };

    return (
        <div className="form-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit} autoComplete="off">
                <div className="input">
                    <span className="icon"><ion-icon name="mail-outline"></ion-icon></span>
                    <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label>Email</label>
                </div>
                <div className="input">
                    <span className="icon"><ion-icon name="lock-closed-outline"></ion-icon></span>
                    <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label>Password</label>
                </div>
                <div className="remember">
                    <label>
                        <input type="checkbox" />
                        Remember me
                    </label>
                    <a href="#">Forgot password?</a>
                </div>
                <button type="submit" className="btn">Login</button>
                <div className="login-register">
                    <p>
                        Don't have an account? 
                        <a href="/register">Register</a>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Login;
