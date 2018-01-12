import React from 'react';

import { BrowserRouter as ReactRouter, Route, Switch } from 'react-router-dom';

import App from './App';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import Dashboard from './pages/Dashboard';

const userSignedIn = false;

export default class Router extends React.Component {
    
    signedInRoutes(){
        if (userSignedIn){
            return (
                <Route path="/new" render={()=><h1>Bienvenido</h1>} />
            )
        }
    }

    home(){
        if (userSignedIn) return Dashboard;

        return Home;
    }

    render(){
        return(
            <ReactRouter>
                <App>
                    <Switch>
                        <Route exact path="/" component={ this.home() } />
                        <Route path="/login" component={Login} />
                        <Route path="/signup" component={Login} />
                        { this.signedInRoutes() }
                    </Switch>
                </App>
            </ReactRouter>
        )
    }
}