import React from 'react';
import renters from '../style/images/renters.png';
import landlords from '../style/images/landlords.png';

const Article = () => (
  <div className="articles-container">
    <h2>
      Whether you are a first time buyer or a first time renter we have all the information you will
      need
    </h2>
    <div className="articles">
      <div className="article-item">
        <a href="https://england.shelter.org.uk/housing_advice/housing_for_young_people/top_tips_for_first-time_renters">
          <img src={renters} alt="overview of the article page" />
        </a>
      </div>
      <div className="article-item">
        <a href="https://www.landlordology.com/first-time-landlord-tips/">
          <img src={landlords} alt="overview of the article page" />
        </a>
      </div>
      <div className="article-item">
        <img src={renters} alt="overview of the article page" />
      </div>
    </div>
  </div>
);

export default Article;
