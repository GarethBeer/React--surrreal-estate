import React, { Component } from 'react';
import Axios from 'axios';
import qs from 'qs';
import PropTypes from 'prop-types';
import SideBar from './SideBar';
import PropertyCard from './PropertyCard';

class Properties extends Component {
  constructor() {
    super();
    this.state = {
      properties: [],
      savedProps: [],
      propSearch: '',
      alertMessage: 'Property has already been added to your favourites',
      isError: false,
    };
  }

  componentDidMount() {
    Axios.get('http://localhost:3000/api/v1/PropertyListing').then(data => {
      this.setState({
        properties: data.data,
      });
    });
    Axios.get('http://localhost:3000/api/v1/Favourite?populate=propertyListing').then(data =>
      this.setState({
        savedProps: data.data,
      }),
    );
  }

  componentDidUpdate(prevProps) {
    const { search } = this.props.location;

    if (prevProps.location.search !== search) {
      Axios.get(`http://localhost:3000/api/v1/PropertyListing${search}`)
        .then(({ data: properties }) => this.setState({ properties }))
        .catch(err => console.log(err));
    }
  }

  handleSearchInput = event => {
    this.setState({
      propSearch: event.target.value,
    });
  };

  buildQueryString = (operation, valueObj) => {
    const {
      location: { search },
    } = this.props;

    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });

    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify({
        ...JSON.parse(currentQueryParams[operation] || '{}'),
        ...valueObj,
      }),
    };

    return qs.stringify(newQueryParams, { addQueryPrefix: true, encode: false });
  };

  handlePropSearch = event => {
    event.preventDefault();
    const { propSearch } = this.state;

    const newQueryString = this.buildQueryString('query', { title: { $regex: propSearch } });
    const { history } = this.props;

    history.push(newQueryString);
  };

  handleSaveProperty = propertyId => {
    const { savedProps } = this.state;
    const { userID } = this.props;
    const ids = [];

    Axios.get('http://localhost:3000/api/v1/Favourite?populate=propertyListing').then(data =>
      this.setState({
        savedProps: data.data,
      }),
    );

    savedProps.map(id => ids.push(id.propertyListing._id));

    if (!ids.includes(propertyId)) {
      Axios.post('http://localhost:3000/api/v1/Favourite', {
        propertyListing: propertyId,
        fbUserId: userID,
      }).catch(error => {
        this.setState({
          alertMessage: 'Error, property not added',
          isError: true,
        });
      });
    } else {
      window.alert(this.state.alertMessage);
    }
  };

  render() {
    const { userID } = this.props;
    const { properties, propSearch } = this.state;

    return (
      <section className="properties-page">
        <div className="properties-title">
          <h1>Search Properties...</h1>
        </div>
        <SideBar
          buildQuery={this.buildQueryString}
          search={this.handlePropSearch}
          searchInput={this.handleSearchInput}
          value={propSearch}
        />

        <div className="property-summaries">
          {properties.map(property => (
            <PropertyCard
              key={property._id}
              title={property.title}
              type={property.type}
              bathrooms={property.bathrooms}
              bedrooms={property.bedrooms}
              price={property.price}
              city={property.city}
              email={property.email}
              userID={userID}
              saveProp={this.handleSaveProperty}
              id={property._id}
            />
          ))}
        </div>
      </section>
    );
  }
}

export default Properties;

Properties.propTypes = {
  search: PropTypes.string,
  userID: PropTypes.string,
};
