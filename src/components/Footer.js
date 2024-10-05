import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-3">
      <div className="container text-center">
        <p>&copy; 2024 Travel Tour Guide. All rights reserved.</p>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="#" className="text-light">
              <i className="fa fa-facebook"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#" className="text-light">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#" className="text-light">
              <i className="fa fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
