import React from 'react';
import { Link } from 'react-router-dom';

import '../style/SideBar.css';

const SideBar = () => {
  return (
    <div className="sideBarContainer">
      <h2>Filter</h2>
      <div className="link-container">
        <h3>City</h3>
        <Link to={`/?query={"city": "Manchester"}`} className="link">
          Manchester
        </Link>
        <Link to={`/?query={"city": "Liverpool"}`} className="link">
          Liverpool
        </Link>
        <Link to={`/?query={"city": "Leeds"}`} className="link">
          Leeds
        </Link>
        <Link to={`/?query={"city": "Sheffield"}`} className="link">
          Sheffield
        </Link>
      </div>
      <div className="link-container">
        <h3>Price</h3>
        <Link className="link">Link</Link>
      </div>
    </div>
  );
};

export default SideBar;
