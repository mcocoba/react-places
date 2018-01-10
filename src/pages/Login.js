import React from 'react';

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
                                <RaisedButton label="Ingresar" secondary={true} />
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