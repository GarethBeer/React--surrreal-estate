import React from 'react';
import PropTypes from 'prop-types';

const FavouritesCard = props => {
  const {
    title,
    type,
    bathrooms,
    bedrooms,
    price,
    city,
    email,

    id,
    deletefunc,
  } = props;

  return (
    <div className="card">
      <div className="card-image">
        <img src={require(`../style/images/${type}.jpg`)} alt="" />
      </div>
      <div className="card-text">
        <span className="date">{type}</span>
        <h2>{city}</h2>
        <p>{title}</p>
        <div className="email-button">
          <span>{email}</span>
          <button onClick={() => deletefunc(id)}>delete</button>
        </div>
      </div>
      <div className="card-stats">
        <div className="stat">
          <div className="value">
            <i className="fas fa-bed" />
            {bedrooms}
          </div>
        </div>
        <div className="stat border">
          <div className="value">
            <i className="fas fa-pound-sign" />
            {price}
          </div>
          <div className="type" />
        </div>
        <div className="stat">
          <div className="value">
            <i className="fas fa-bath" />
            {bathrooms}
          </div>
          <div className="type" />
        </div>
      </div>
    </div>
  );
};

FavouritesCard.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  bathrooms: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default FavouritesCard;
