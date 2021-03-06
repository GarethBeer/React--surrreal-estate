import React from 'react';
import PropTypes from 'prop-types';

const PropertyCard = props => {
  const { title, type, bathrooms, bedrooms, price, city, email, userID, saveProp, id } = props;

  let saveBtn;
  if (userID) {
    saveBtn = (
      <button onClick={() => saveProp(id)} type="button">
        Save
      </button>
    );
  }
  return (
    <div className="card">
      <div className="card-image">
        <img src={require(`../style/images/${type}.jpg`)} alt="" />
      </div>
      <div className="card-text">
        <span className="date">{type}</span>
        <h2>{city}</h2>
        <p className="text">{title}</p>
        <div className="email-button">
          <span>{email}</span>
          {saveBtn}
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
        </div>
        <div className="stat">
          <div className="value">
            <i className="fas fa-bath" />
            {bathrooms}
          </div>
        </div>
      </div>
    </div>
  );
};

PropertyCard.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  bathrooms: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,

  saveProp: PropTypes.func.isRequired,
};

export default PropertyCard;
