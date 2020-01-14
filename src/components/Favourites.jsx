import React, { Component } from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';
import FavouritesCard from './FavouritesCard';

class Favourites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: [],
      deleteBtn: false,
    };
  }

  componentDidMount = () => {
    const { loggedIn } = this.props;
    if (loggedIn) {
      Axios.get('http://localhost:3000/api/v1/Favourite?populate=propertyListing').then(data =>
        this.setState({
          properties: data.data,
          deleteBtn: true,
        }),
      );
    }
  };

  handleDeleteFavourite = id => {
    const { properties } = this.state;
    Axios.delete(`http://localhost:3000/api/v1/Favourite/${id}`)
      .then(
        this.setState({
          properties: properties.filter(property => property._id !== id),
        }),
      )
      .catch(error => console.log(error));
  };

  render() {
    const { deleteBtn } = this.state;

    return (
      <section className="favourites">
        {this.state.properties.map(property => (
          <FavouritesCard
            key={property.propertyListing._id}
            id={property._id}
            title={property.propertyListing.title}
            type={property.propertyListing.type}
            bathrooms={property.propertyListing.bathrooms}
            bedrooms={property.propertyListing.bedrooms}
            price={property.propertyListing.price}
            city={property.propertyListing.city}
            email={property.propertyListing.email}
            button={deleteBtn}
            deletefunc={this.handleDeleteFavourite}
          />
        ))}
      </section>
    );
  }
}

export default Favourites;

Favourites.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};
