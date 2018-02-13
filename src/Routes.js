import React from 'react';
import { connect } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import { BrowserRouter as ReactRouter, Route, Switch } from 'react-router-dom';

import App from './App';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Place from './pages/Place';

const userSignedIn = false;

class Router extends React.Component {
    
    signedInRoutes(){
        if (this.props.user.jwt){
            return (
                <Route path="/new" render={()=><h1>Bienvenido</h1>} />
            )
        }
    }

    home(){
        if (this.props.user.jwt) return Dashboard;

        return Home;
    }

    render(){
        return(
            <ConnectedRouter history={ this.props.history }>
                <App>
                    <Route exact path="/" component={ this.home() } />
                    <Route path="/places/:slug" component={ Place } />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Login} />
                    {this.signedInRoutes()}
                </App>
            </ConnectedRouter>
        )
    }
}

function mapStateToProps( state, ownProps ){
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Router);