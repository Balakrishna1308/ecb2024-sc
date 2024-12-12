import React, { useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
function App() {
    const [loggedInUser, setLoggedInUser] = useState(null);

    const handleLogout = () => {
        setLoggedInUser(null);
    };

    const isAdmin = loggedInUser === 'admin'; 
    

    return (
        <div className="App">
            <header className="App-header">
                <h1>myshow4all</h1>
                {!loggedInUser ? (
                    <LoginForm setLoggedInUser={setLoggedInUser} />
                ) : (
                    <>
                        <p>Welcome, {loggedInUser}!</p>
                        <button onClick={handleLogout}>Logout</button>
                    </>
                )}
            </header>
        </div>
    );
}

export default App;
