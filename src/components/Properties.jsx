import React, { Component } from 'react';
import Axios from 'axios';
import qs from 'qs';
import SideBar from './SideBar';
import PropertyCard from './PropertyCard';
import '../style/Properties.css';

class Properties extends Component {
  constructor() {
    super();
    this.state = {
      properties: [],
      sidebar: {
        filter: false,
        sort: false,
      },
      propSearch: '',
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

    console.log('submitted');
  };

  render() {
    return (
      <div className="properties-container">
        <form className="titleSearch" onSubmit={this.handlePropSearch}>
          <input
            type="text"
            value={this.state.propSearch}
            onChange={event =>
              this.setState({
                propSearch: event.target.value,
              })
            }
          />
          <button type="submit">
            <i className="fas fa-search" />
          </button>
        </form>

        <div className="filter-properties">
          <SideBar sidebar={this.state.sidebar} buildQuery={this.buildQueryString} />
          <section className="property-summaries">
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
              />
            ))}
          </section>
        </div>
      </div>
    );
  }
}

export default Properties;
