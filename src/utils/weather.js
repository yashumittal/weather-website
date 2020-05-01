const request = require('postman-request');


const getWeather = (latitude, longitude, callback)=>{

    const weaterAPIBaseURL = 'https://api.openweathermap.org/data/2.5/onecall?';
    const weatherAPIAccessKey = 'e0e71f3723d83c266c9a9a9e7ea1b2f4'
    let weatherAPIQueryParams = 'lat=' + latitude + '&lon=' + longitude + '&units=metric&appid=';

    const url = weaterAPIBaseURL + weatherAPIQueryParams + weatherAPIAccessKey

   // console.log(weatherAPIEndPoint);

    request({ url, json: true }, (error, {body}) => {
       // console.log(error);
        if (error) {
            callback('Unable to connect to weather service', undefined);
        } else if (!body) {
            callback('Weather not avaialble', undefined);
        }
        else {
            callback(undefined, {
                weather : body.current.weather[0].description,
                temp : body.current.temp,
                feels_like : body.current.feels_like
            })
        }
    })

}

module.exports = {getWeather};