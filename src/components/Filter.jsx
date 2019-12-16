import React from 'react';
import { Link } from 'react-router-dom';

import '../style/SideBar.css';

const Filter = () => {
  return (
    <div className="sideBarContainer">
      <div className="link-container">
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
    </div>
  );
};

export default Filter;
