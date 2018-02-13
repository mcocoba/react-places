import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import { Card, CardText, CardMedia, CardTitle } from 'material-ui/Card';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { indigo400, redA400, lightBlueA400, amberA400 } from 'material-ui/styles/colors';

import Container from '../components/Container'
import Title from '../components/Title';
import Benefits from '../components/Benefits';
import PlaceCard from '../components/places/PlaceCard';

import { getPlaces } from '../requests/places';

const places = [];

class Home extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      places: places
    }

    this.hidePlace = this.hidePlace.bind(this);
  }

  loadPlaces(){
    getPlaces().then(jsonResponse => {
      const places = jsonResponse.docs;
    });
  }

  places() {
    return this.state.places.map((place, index) => {
      return (
        <PlaceCard onRemove={ this.hidePlace } place={ place } key={ index } />
      );
    });
  }

  hidePlace(place){
    this.setState({
      places: this.state.places.filter(el => el != place)
    })
  }

  render() {
    return (
      <section>
        <div className="Header-background">
          <Container>
            <div className="Header-name">
              <Title />
              <Link to="/signup">
                <RaisedButton label="Crear cuenta gratuita" secondary={true} />
              </Link>
              <img className="Header-image" src={process.env.PUBLIC_URL + '/images/top-background.jpg'} />
            </div>
            <div>
              <Benefits />
            </div>
          
          </Container>
        </div>
        <div style={{ 'backgroundColor': indigo400, padding: '50px', color: 'white' }}>
          <h3 style={{ 'fontSize': '24px' }}>Sitios Populares</h3>
          <TransitionGroup className="row">
            {this.places()}
          </TransitionGroup>
        </div>
      </section>
    )
  }
}

function mapStateToProps(state, ownProps){
  return {
    places: state.places
  }
}

export default connect(mapStateToProps)(Home)