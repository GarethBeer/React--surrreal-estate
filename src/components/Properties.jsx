import React, { Component } from 'react';
import Axios from 'axios';
import SideBar from './SideBar';
import PropertyCard from './PropertyCard';
import '../style/Properties.css';

class Properties extends Component {
  constructor() {
    super();
    this.state = {
      properties: [],
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

  render() {
    return (
      <div className="filter-summaries">
        <SideBar />
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
