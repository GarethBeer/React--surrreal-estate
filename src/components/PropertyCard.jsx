import React from 'react';
import PropTypes from 'prop-types';
import '../style/PropertyCard.css';

const PropertyCard = props => {
  const { title, type, bathrooms, bedrooms, price, city, email } = props;
  return (
    <div className="PropertyCard">
      <h5 className="title">{title}</h5>
      <p className="type">{type}</p>
      <p className="city">{city}</p>
      <img
        src={require(`../style/images/${type}.jpg`)}
        alt="House set back with white picket fence"
      />
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
      <p className="email">
        <i className="far fa-envelope" />
        {email}
      </p>
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
