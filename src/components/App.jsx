import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Properties from './Properties';
import AddProperty from './AddProperty';
import Footer from './Footer';
import '../style/App.css';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Properties} />
        <Route path="/AddProperty" component={AddProperty} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
