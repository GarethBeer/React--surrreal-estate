import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Properties from './Properties';
import AddProperty from './AddProperty';
import Favourites from './Favourites';
import Footer from './Footer';
import '../style/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userId: null,
      isLoggedIn: false,
      name: '',
      email: '',
      picture: '',
      accessToken: '',
    };
  }

  handleLogin = response => {
    this.setState({
      isLoggedIn: true,
      userId: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url,
      accessToken: response.accessToken,
    });
  };

  handleLogOut = () => {};

  render() {
    const { userId, isLoggedIn } = this.state;
    return (
      <main className="App">
        <NavBar onLogin={this.handleLogin} state={this.state} logOut={this.handleLogOut} />
        <Switch>
          <Route
            exact
            path="/"
            render={props => <Properties {...props} userID={userId} loggedIn={isLoggedIn} />}
          />
          <Route path="/AddProperty" component={AddProperty} />

          <Route
            path="/Favourites"
            render={props => <Favourites {...props} loggedIn={isLoggedIn} />}
          />
        </Switch>
        <Footer />
      </main>
    );
  }
}

export default App;
