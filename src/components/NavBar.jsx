import React from 'react';
import { Link } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';

const NavBar = props => {
  const { onLogin, state, logOut } = props;
  let fbContent;

  if (state.isLoggedIn) {
    fbContent = (
      <div className="fbLoggedIn" onClick={logOut}>
        <img src={state.picture} alt={state.name} />
        <span>{state.name}</span>
      </div>
    );
  } else {
    fbContent = (
      <FacebookLogin appId="972987829738952" fields="name,email,picture" callback={onLogin} />
    );
  }

  return (
    <nav>
      <div className="navContainer">
        <h3>
          <i className="fas fa-home" />
          Surreal Estates
        </h3>

        <div className="item-container">
          <Link to="/" className="item">
            Properties
          </Link>
          {state.isLoggedIn ? (
            <Link to="/Favourites" className="item">
              Favourites
            </Link>
          ) : (
            ''
          )}

          <Link to="/AddProperty" className="item">
            Add a property
          </Link>
          {fbContent}
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
