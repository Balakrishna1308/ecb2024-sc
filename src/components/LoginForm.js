import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = ({ setLoggedInUser }) => {
    const [loginData, setLoginData] = useState({ username: '', password: '' });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage('');

        axios.post('http://localhost:8080/api/users/login', loginData)
            .then(response => {
                setMessage('Login successful!');
                setLoggedInUser(loginData.username); // Pass logged-in username to parent
            })
            .catch(error => {
                setMessage('Invalid username or password');
            });
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={loginData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={loginData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            {message && <p style={{ color: message.includes('successful') ? 'green' : 'red' }}>{message}</p>}
        </div>
    );
};

export default LoginForm;
