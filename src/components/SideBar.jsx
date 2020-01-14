import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SideBar = props => {
  const { buildQuery, search, searchInput, value } = props;
  return (
    <div className="sidebar">
      <div className="link-container">
        <div className="filter-cities">
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
        </div>
        <div className="sort-price">
          <Link to={buildQuery('sort', { price: -1 })} className="link">
            <i className="fas fa-long-arrow-alt-up" />
            Price
          </Link>
          <Link to={buildQuery('sort', { price: 1 })} className="link">
            <i className="fas fa-long-arrow-alt-down" />
            Price
          </Link>
        </div>
        <form className="titleSearch" onSubmit={search}>
          <input type="text" value={value} onChange={searchInput} />
          <button type="submit">
            <i className="fas fa-search" />
          </button>
        </form>
        <Link to="/" className="link reset">
          Reset
        </Link>
      </div>
    </div>
  );
};

SideBar.propTypes = {
  buildQuery: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
  searchInput: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default SideBar;
