import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../style/SideBar.css';

const SideBar = props => {
  const { buildQuery } = props;
  return (
    <div>
      <div className="burger">
        <div className="line1" />
        <div className="line2" />
        <div className="line3" />
      </div>
      <div>
        <div className="link-container">
          <Link to={`/?query={"city":"Manchester"}`} className="link">
            Manchester
          </Link>
          <Link to={`/?query={"city":"Liverpool"}`} className="link">
            Liverpool
          </Link>
          <Link to={`/?query={"city":"Leeds"}`} className="link">
            Leeds
          </Link>
          <Link to={`/?query={"city":"Sheffield"}`} className="link">
            Sheffield
          </Link>
          <Link to="/" className="link reset">
            Reset
          </Link>
        </div>
        <div className="link-container">
          <Link to={buildQuery('sort', { price: -1 })} className="link">
            <i className="fas fa-long-arrow-alt-up" />
            Price
          </Link>
          <Link to={buildQuery('sort', { price: 1 })} className="link">
            <i className="fas fa-long-arrow-alt-down" />
            Price
          </Link>
        </div>
      </div>
    </div>
  );
};

SideBar.propTypes = {
  buildQuery: PropTypes.func.isRequired,
};

export default SideBar;
