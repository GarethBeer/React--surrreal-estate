import React from 'react';
import { Link } from 'react-router-dom';
import '../style/SideBar.css';

const SideBar = () => (
  <div className="sideBarContainer">
    <h2>Filter</h2>
    <div className="link-container">
      <h3>City</h3>
      <Link to={`/?query={"city": "Manchester"}`}>Manchester</Link>
      <Link to={`/?query={"city": "Liverpool"}`}>Liverpool</Link>
      <Link to={`/?query={"city": "Leeds"}`}>Leeds</Link>
      <Link to={`/?query={"city": "Sheffield"}`}>Sheffield</Link>
    </div>
    <div className="link-container">
      <h3>Price</h3>
      <Link to={`/?query={"price": < 60000}`}>0-60,000</Link>
      <Link to={`/?query={"price": >60000 && < 80000}`}>60,000-80,000</Link>
      <Link to={`/?query={"price": >80000 && < 100000}`}>80,000-100,000</Link>
      <Link to={`/?query={"price": >100000}`}>100,000+</Link>
    </div>
  </div>
);

export default SideBar;
