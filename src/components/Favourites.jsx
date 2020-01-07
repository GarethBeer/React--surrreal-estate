import React, { Component } from 'react';
import Axios from 'axios';
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
    Axios.delete(`http://localhost:3000/api/v1/Favourite/${id}`)
      .then(
        this.setState({
          properties: this.state.properties.filter(property => property._id !== property.id),
        }),
      )
      .catch(error => console.log(error));
  };

  render() {
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
            button={this.state.deleteBtn}
            deletefunc={this.handleDeleteFavourite}
          />
        ))}
      </section>
    );
  }
}

export default Favourites;
