import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { withRouter } from 'react-router-dom';

import PlacesAppBar from './components/navigation/AppBar';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);

    this.goHome = this.goHome.bind(this);
  }

  goHome(){
    this.props.history.push('/');
  }

  render() {
    return (
      <MuiThemeProvider>
        <PlacesAppBar goHome={ this.goHome }/>
        { this.props.children }
      </MuiThemeProvider>
    );
  }
}

export default withRouter(App);