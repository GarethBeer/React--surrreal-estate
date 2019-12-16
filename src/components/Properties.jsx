import React, { Component } from 'react';
import Axios from 'axios';
import Filter from './Filter';
import Sort from './Sort';
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
    };
  }

  componentDidMount() {
    Axios.get('http://localhost:3000/api/v1/PropertyListing').then(data => {
      this.setState({
        properties: data.data,
      });
      console.log(data.data);
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

  handleFilter = event => {
    if (!this.state.sidebar.filter) {
      this.setState({
        sidebar: {
          filter: true,
        },
      });
    } else {
      this.setState({
        sidebar: {
          filter: false,
        },
      });
    }
  };

  handleSort = event => {
    if (!this.state.sidebar.sort) {
      this.setState({
        sidebar: {
          sort: true,
        },
      });
    } else {
      this.setState({
        sidebar: {
          sort: false,
        },
      });
    }
  };

  render() {
    return (
      <div className="filter-summaries">
        <div className="sidebar">
          <div>
            <button onClick={this.handleFilter} type="button">
              <i className="fas fa-filter" />
              Filter
            </button>
            {this.state.sidebar.filter && <Filter />}
          </div>
          <div>
            <button onClick={this.handleSort} type="button">
              <i className="fas fa-sort" />
              Sort
            </button>
            {this.state.sidebar.sort && <Sort />}
          </div>
        </div>
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
    );
  }
}

export default Properties;
