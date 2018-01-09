import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Home from './pages/Home';
import Login from './pages/Login';

import './App.css';

import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <div>
            <Route exact path="/" component={Home}></Route>
            <Route path="/login" component={Login}></Route>
          </div>
        </Router>

        <Home />
      </MuiThemeProvider>
    );
  }
}

export default App;
