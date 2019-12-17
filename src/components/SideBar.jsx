import React from 'react';
import { Link } from 'react-router-dom';

import '../style/SideBar.css';

const SideBar = props => {
  const { sidebar, clickFilter, clickSort } = props;

  let filterComp;
  let sortComp;

  if (sidebar.filter) {
    filterComp = (
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
    );
  }
  if (sidebar.sort) {
    sortComp = (
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
    );
  }
  return (
    <div className="sideBarContainer">
      <button onClick={clickFilter}>Filter</button>
      {filterComp}
      <button onClick={clickSort}>Sort</button>
      {sortComp}
    </div>
  );
};

export default SideBar;
