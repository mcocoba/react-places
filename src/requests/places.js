import config from '../config/secrets';

function getPlaces(){
    return fetch(config.url + 'places').then( data => {
        return data.json();
    }).catch(console.log);
}

function getPlace(slug){
    return fetch(config.url + 'places/' + slug).then(data => {
        return data.json();
    }).catch(console.log);
}

export { getPlaces, getPlace };
