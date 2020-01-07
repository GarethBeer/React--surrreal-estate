import React, { Component } from 'react';
import Axios from 'axios';
import qs from 'qs';
import SideBar from './SideBar';
import PropertyCard from './PropertyCard';

class Properties extends Component {
  constructor() {
    super();
    this.state = {
      properties: [],
      sidebar: false,
      propSearch: '',
      alertMessage: '',
      isError: false,
    };
  }

  componentDidMount() {
    Axios.get('http://localhost:3000/api/v1/PropertyListing').then(data => {
      this.setState({
        properties: data.data,
      });
    });
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
    Axios.post('http://localhost:3000/api/v1/Favourite', {
      propertyListing: propertyId,
      fbUserId: this.props.userID,
    }).catch(error => {
      this.setState({
        alertMessage: 'Error, property not added',
        isError: true,
      });
    });
  };

  handleSidebar = () => {
    if (!this.state.sidebar) {
      this.setState({
        sidebar: true,
      });
    } else {
      this.setState({
        sidebar: false,
      });
    }
  };

  render() {
    const { userID } = this.props;

    return (
      <section className="properties-page">
        {this.state.sidebar ? (
          <div className="sidebar">
            <SideBar
              sidebar={this.state.sidebar}
              buildQuery={this.buildQueryString}
              search={this.handlePropSearch}
              searchInput={this.handleSearchInput}
              value={this.state.propSearch}
            />
          </div>
        ) : (
          ''
        )}
        <div className="btn">
          <button onClick={this.handleSidebar} className="filter-btn">
            filter
          </button>
        </div>
        <div className="property-summaries">
          {this.state.properties.map(property => (
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
