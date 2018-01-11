import React from 'react';
import { BrowserRouter as ReactRouter, Route, Link } from 'react-router-dom';

import Container from '../components/Container';
import Title from '../components/Title';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class Login extends React.Component{
    render(){
        return(
            <div className="row middle-xs">
                <div className="col-xs-12 col-sm-6">
                    <Container>
                        <div style={{ 'textAlign':'left' }}>
                            <Title />
                            <TextField
                                floatingLabelText="Correo Electronico"
                                type="email"
                                className="textfield"
                            />
                            <TextField
                                floatingLabelText="Password"
                                type="password"
                                className="textfield"
                            />
                            <div className="Login-action">
                                <Route path="/login" exact render={()=>{
                                    return(
                                        <div>
                                            <Link to="/signup" style={{ marginRight: "1em" }}>Crear nueva cuenta </Link>
                                            <RaisedButton label="Ingresar" secondary={true} />
                                        </div>
                                    )
                                }}></Route>
                                <Route path="/signup" exact render={() => {
                                    return (
                                        <div>
                                            <Link to="/login" style={{ marginRight: "1em" }}>Ya tengo cuenta </Link>
                                            <RaisedButton label="Crear cuenta" secondary={true} />
                                        </div>
                                    )
                                }}></Route>
                            </div>
                        </div>
                    </Container>
                </div>
                <div className="col-xs-12 col-sm-6">
                    <div className="Login-background" style={{ 'backgroundImage': "url(" + process.env.PUBLIC_URL + '/images/login-background.jpeg' + ")" }} ></div>
                </div>
            </div>
        )
    }
}