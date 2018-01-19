import React from 'react';
import { Card, CardHeader, CardMedia, CardTitle, CardText, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';

export default class PlaceHorizontal extends React.Component {
    render() {
        return (
            <Card style={{ 'marginTop':'1em', 'overflow':'hidden' }}>
                <div className="row">
                    <div className="placeH-avatar">
                        <img src={ this.props.place.avatarImage } style={{ 'width':'50%' }}/>
                    </div>
                    <div className="col-xs">
                        <CardHeader
                            title={ this.props.place.title }
                            subtitle={ this.props.place.address }
                        />
                        <div className="row middle-xs">
                            <div className="col-xs-6 col-sm-8 col-lg-9" >
                                <CardText>{ this.props.place.description }</CardText>
                            </div>
                            <div className="col-xs">
                                <CardActions style={{ 'textAlign': 'right' }}>
                                    <Link to={ '/places/' + this.props.place.slug } ><FlatButton secondary={true} label="Ver mas" /></Link>
                                </CardActions>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        )
    }
}