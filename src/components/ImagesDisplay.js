import React from 'react';
import './style.css'; // Ensure this points to your CSS file

const ImagesDisplay = () => {
    // Check if the user is authenticated
    const isAuthenticated = localStorage.getItem('isAuthenticated');

    // If authenticated, do not render images
    if (isAuthenticated) {
        return null; // Do not display images if the user is authenticated
    }

    return (
        <div className="image-container">
            <div className="image-wrapper left-image">
                <img src="/images/img-1.jpg" alt="Left Image" />
            </div>
            <div className="image-wrapper right-image">
                <img src="/images/img-2.jpg" alt="Right Image" />
            </div>
        </div>
    );
};

export default ImagesDisplay;
