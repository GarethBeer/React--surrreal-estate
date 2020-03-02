/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import Axios from 'axios';
import Alert from './Alert';

class AddProperty extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      type: 'Flat',
      bedrooms: 0,
      bathrooms: 0,
      price: 0,
      city: 'Manchester',
      email: ' ',

      alertMessage: '  ',
      isSuccess: false,
      isError: false,
    };
  }

  handleAddProperty = event => {
    console.log(event);
    event.preventDefault();
    this.setState({
      alertMessage: ' ',
      isSuccess: false,
    });

    Axios.post('http://localhost:3000/api/v1/PropertyListing', {
      ...this.state,
      [event.target.name]: event.target.value,
    })
      .then(() => {
        this.setState({
          alertMessage: 'Property Added',
          isSuccess: true,
        });
      })
      .catch(error => {
        this.setState({
          alertMessage: 'Error, property not added',
          isError: true,
        });
        console.log(error);
      });
  };

  handleFieldChange = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <section className="AddProperty">
        <div className="add-propContainer">
          <h2>Are you looking to rent your property? Fill in the details below</h2>
          <form action="" onSubmit={this.handleAddProperty} className="form">
            {this.state.isSuccess && <Alert message={this.state.alertMessage} success />}
            {this.state.isError && <Alert message={this.state.alertMessage} />}
            <div className="formItem title">
              <label>Description</label>
              <div className="description">
                <textarea
                  className="textarea"
                  type="text"
                  name="title"
                  value={this.state.title}
                  onChange={this.handleFieldChange}
                  required
                />
              </div>
            </div>
            <div className="item-rows">
              <div className="formItem">
                <label>Type of Property</label>
                <select name="type" value={this.state.type} onChange={this.handleFieldChange}>
                  <option value="Flat">Flat</option>
                  <option value="Detached">Detached House</option>
                  <option value="Semi-Detached">Semi-Detached House</option>
                  <option value="Terraced">Terraced House</option>
                  <option value="End of Terrace">End of Terrace House</option>
                  <option value="Cottage">Cottage</option>
                  <option value="Bungalow">Bungalow</option>
                </select>
              </div>
              <div className="formItem">
                <label>Property Location</label>
                <select name="city" value={this.state.city} onChange={this.handleFieldChange}>
                  <option value="Manchester">Manchester</option>
                  <option value="Leeds">Leeds</option>
                  <option value="Sheffield">Sheffield</option>
                  <option value="Liverpool">Liverpool</option>
                </select>
              </div>
            </div>
            <div className="item-rows">
              <div className="formItem">
                <label>No. of Bedrooms</label>
                <div className="input-icon">
                  <span className="fas fa-bed" />
                  <input
                    type="text"
                    name="bedrooms"
                    value={this.state.bedrooms}
                    onChange={this.handleFieldChange}
                  />
                </div>
              </div>
              <div className="formItem">
                <label>No. of Bathrooms</label>
                <div className="input-icon">
                  <i className="fas fa-bath" />
                  <input
                    type="text"
                    name="bathrooms"
                    value={this.state.bathrooms}
                    onChange={this.handleFieldChange}
                  />
                </div>
              </div>
              <div className="formItem">
                <label>Property Price </label>
                <div className="input-icon">
                  <span className="fas fa-pound-sign" />
                  <input
                    type="text"
                    name="price"
                    value={this.state.price}
                    onChange={this.handleFieldChange}
                  />
                </div>
              </div>
            </div>
            <div className="formItem email-entry">
              <label>Contact Email Address</label>
              <div className="input-icon">
                <input
                  type="text"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleFieldChange}
                />
              </div>
            </div>
            <div className="formItem">
              <button className="form-btn" type="submit">
                Add
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}
export default AddProperty;
