import React from 'react';
import PropTypes from 'prop-types';
import '../style/PropertyCard.css';

const PropertyCard = props => {
  const { title, type, bathrooms, bedrooms, price, city, email } = props;
  return (
    <div className="PropertyCard">
      <div className="title-image">
        <h5 className="title">{title}</h5>
        <img
          src={require(`../style/images/${type}.jpg`)}
          alt="House set back with white picket fence"
        />
      </div>
      <div className="desc">
        <div className="type-city">
          <div>
            <span>Type:</span>
            <p className="type">{type}</p>
          </div>
          <div>
            <span>Location:</span>
            <p className="city">{city}</p>
          </div>
        </div>
        <div className="bed-bath-price">
          <div className="bed-bath">
            <p className="bedroom">
              <i className="fas fa-bed" />
              {bedrooms}
            </p>
            <p className="bathroom">
              <i className="fas fa-bath" />
              {bathrooms}
            </p>
          </div>
          <p className="price">
            <i className="fas fa-pound-sign" />
            {price}
          </p>
        </div>
        <div className="email-container">
          <p className="email">
            <i className="far fa-envelope" />
            {email}
          </p>
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
};

export default PropertyCard;
