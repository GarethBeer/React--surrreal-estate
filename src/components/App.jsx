import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Properties from './Properties';
import AddProperty from './AddProperty';
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
    console.log(response);
  };

  handleLogOut = () => {
    console.log(window.FB.logout);
  };

  render() {
    return (
      <div className="App">
        <NavBar onLogin={this.handleLogin} state={this.state} logOut={this.handleLogOut} />
        <Switch>
          <Route exact path="/" component={Properties} />
          <Route path="/AddProperty" component={AddProperty} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
