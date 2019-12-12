import React from 'react';
import { Link } from 'react-router-dom';
import '../style/NavBar.css';

const NavBar = () => (
  <div className="navContainer">
    <h3>
      <i className="fas fa-home" />
      Surreal Estates
    </h3>

    <div className="item-container">
      <Link to="/" className="item">
        View Properties
      </Link>

      <Link to="/AddProperty" className="item">
        Add a property
      </Link>
    </div>
  </div>
);

export default NavBar;
