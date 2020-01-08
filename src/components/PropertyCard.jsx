import React from 'react';
import PropTypes from 'prop-types';

const PropertyCard = props => {
  const {
    title,
    type,
    bathrooms,
    bedrooms,
    price,
    city,
    email,
    userID,
    saveProp,
    id,
    button,
  } = props;

  let saveBtn;
  if (userID) {
    saveBtn = <button onClick={() => saveProp(id)}>Save</button>;
  }
  return (
    <div className="PropertyCard">
      <div className="box-1">
        <img
          src={require(`../style/images/${type}.jpg`)}
          alt="House set back with white picket fence"
        />
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
      </div>

      <div className="box-2">
        <h5 className="title">{title}</h5>
        <div className="type-city">
          <div>
            <p className="type">{type}</p>
          </div>
          <div>
            <p className="city">{city}</p>
          </div>
        </div>

        <div className="email-container">
          <p className="email">
            <i className="far fa-envelope" />
            {email}
          </p>
        </div>
        {saveBtn}
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
