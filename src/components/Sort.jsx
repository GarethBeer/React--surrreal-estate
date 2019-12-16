import React from 'react';
import { Link } from 'react-router-dom';

import '../style/SideBar.css';

const Sort = () => {
  return (
    <div className="sideBarContainer">
      <div className="link-container">
        <Link className="link">
          <i className="fas fa-long-arrow-alt-up" />
          Price
        </Link>
        <Link className="link">
          <i className="fas fa-long-arrow-alt-down" />
          Price
        </Link>
      </div>
    </div>
  );
};

export default Sort;
