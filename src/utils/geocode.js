const request = require('postman-request');


const getGeoCode = (locationSearch , callback) =>{

    const locationAPIBaseURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
    const locationAPIAccessKey = 'pk.eyJ1IjoieWFzaHVtaXR0YWwiLCJhIjoiY2s5aXZsZXZ4MDFpNTNmcDVuN2hteTM5bSJ9.6JbJ6AE_p1jcAZWEn9y0hA'
    let locationAPIQueryParams = '&limit=1';
    
    const url = locationAPIBaseURL + encodeURIComponent(locationSearch) + '.json?access_token=' + locationAPIAccessKey +locationAPIQueryParams

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Could not connect to location services', undefined);
        } else if (body.features.length == 0) {
            callback('Location Not found', undefined);
        } else {
            callback(undefined, {
                place_name : body.features[0].place_name,
                latitude : body.features[0].geometry.coordinates[0],
                longitude : body.features[0].geometry.coordinates[1]
            })
        }
    })

}


module.exports = {getGeoCode};