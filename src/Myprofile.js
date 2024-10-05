import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { store } from './App'; // Import context
import ImageCarousel from './components/ImageCarousel';
import ImagesDisplay from './components/ImagesDisplay'; // Import ImagesDisplay
import './MyProfile.css'; // Import CSS

const MyProfile = () => {
    const [token] = useContext(store); // Get token from context
    const navigate = useNavigate();

    useEffect(() => {
        // If there's no token, redirect to login
        if (!token) {
            navigate('/login');
        }
    }, [token, navigate]);

    return (
        <div className="my-profile">
            <hr style={{ borderColor: '#ffc107', borderWidth: '2px' }} />
            <ImageCarousel />
            <ImagesDisplay /> {/* This will handle visibility based on local storage */}
        </div>
    );
};

export default MyProfile;
