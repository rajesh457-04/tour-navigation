import React, { useState, createContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import Register from './Register';
import Login from './Login';
import Myprofile from './Myprofile';
import './index.css'; // For background styles
import ImagesDisplay from './components/ImagesDisplay';

export const store = createContext();

const App = () => {
    const [token, setToken] = useState(null);
    return (
        <store.Provider value={[token, setToken]}>
            <BrowserRouter>
                <div className="app-container">
                    <Nav />
                    <Routes>
                        <Route path='/register' element={<Register />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/myprofile' element={<Myprofile />} />
                    </Routes>
                    <ImagesDisplay /> {/* Ensure this isn't placed here if it's to be conditional */}
                </div>
            </BrowserRouter>
        </store.Provider>
    );
};

export default App;
