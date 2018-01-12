import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { withRouter } from 'react-router-dom';

import PlacesAppBar from './components/navigation/AppBar';
import './App.css';

class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <PlacesAppBar />
        { this.props.children }
      </MuiThemeProvider>
    );
  }
}

export default withRouter(App);