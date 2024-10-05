import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { store } from './App';
import './nav.css'; // Import your CSS file

const Nav = () => {
  const [token] = useContext(store);

  return (
    <div className="nav-bar">
      <div className="navlinks">
        {!token ? (
          <>
            <Link className="navlink" to="/register">Register</Link>
            <Link className="navlink" to="/login">Login</Link>
            
          </>
        ) : null /* No links after login */}
      </div>
    </div>
  );
};

export default Nav;
