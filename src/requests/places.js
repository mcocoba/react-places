function getPlaces(){
    return fetch('http://localhost:8080/places').then( data => {
        return data.json();
    }).catch(console.log);
}

function getPlace(slug){
    return fetch('http://localhost:8080/places/' + slug).then(data => {
        return data.json();
    }).catch(console.log);
}

export { getPlaces, getPlace };

export default {
    places: [
        {
            imageUrl: '/images/coffee.jpeg',
            title: 'Desayunos el Rey',
            description: 'Desayunos el Rey, is an american company coffee for the people',
            address: 'Desayunos el Rey, is an american company coffee for the people'
        },
        {
            imageUrl: '/images/breakfast.jpeg',
            title: 'Breakfast el Pochoclo',
            description: 'Breakfast el pochoclo, lo mejor de la tiendita hasta tu casa',
            address: 'Desayunos el Rey, is an american company coffee for the people'
        },
        {
            imageUrl: '/images/pizza.jpeg',
            title: 'Pizza Love',
            description: 'Pizza Love, we love you',
            address: 'Desayunos el Rey, is an american company coffee for the people'
        },
    ]
}