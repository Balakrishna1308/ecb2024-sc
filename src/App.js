import React, { useState } from 'react';
import './App.css';
function App() {
    const [loggedInUser, setLoggedInUser] = useState(null);

    const handleLogout = () => {
        setLoggedInUser(null);
    };

    const isAdmin = loggedInUser === 'admin'; 
    

    return (
        <div className="App">
            <header className="App-header">
                
            </header>
        </div>
    );
}

export default App;
