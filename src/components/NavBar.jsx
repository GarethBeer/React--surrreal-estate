import React from 'react';
import { Link } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import '../style/NavBar.css';

const NavBar = props => {
  const { onLogin, state, logOut } = props;
  let fbContent;

  if (state.isLoggedIn) {
    fbContent = (
      <div className="fbLoggedIn" onClick={logOut}>
        <img src={state.picture} alt={state.name} />
        <span>
          Welcome {'  '}
          {state.name}
        </span>
      </div>
    );
  } else {
    fbContent = (
      <FacebookLogin
        appId="972987829738952"
        autoLoad
        fields="name,email,picture"
        callback={onLogin}
      />
    );
  }

  return (
    <div className="navContainer">
      <h3>
        <i className="fas fa-home" />
        Surreal Estates
      </h3>

      <div className="item-container">
        <Link to="/" className="item">
          View Properties
        </Link>

        <Link to="/AddProperty" className="item">
          Add a property
        </Link>
        {fbContent}
      </div>
    </div>
  );
};
export default NavBar;
