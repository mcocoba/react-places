import React from 'react';

import { Card, CardMedia, CardTitle, CardText, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import CSSTransition from 'react-transition-group/CSSTransition'

import { redA400, lightBlueA400, amberA400 } from 'material-ui/styles/colors';

export default class PlaceCard extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <CSSTransition
                classNames = 'fade-scale'
                in = { this.props.in }
                >
                <div className="col-xs-4 col-sm-4 col-md-4" key={this.props.place.key}>
                    <Card >
                        <CardMedia>
                            <img src={process.env.PUBLIC_URL + this.props.place.imageUrl} />
                        </CardMedia>
                        <CardTitle title={this.props.place.title} />
                        <CardText>
                            {this.props.place.description}
                        </CardText>
                        <CardActions style={{ 'textAlign': 'right' }}>
                            <FlatButton secondary={true} label="Ver mas" />
                            <FlatButton secondary={true} label="Ocultar" onClick={() => this.props.onRemove(this.props.place)} />
                        </CardActions>

                    </Card>
                </div>
            </CSSTransition>
        )
    }
}