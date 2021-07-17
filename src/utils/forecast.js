const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=8450c50500871026c298f0b83e9e5900&query='+ latitude + ',' + longitude

    request({ url, json: true }, (error, { body }={}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions + ' The temperature is ' + body.current.temperature + ' degree and Humidity is ' + body.current.humidity + '. The latitude of location is '+latitude+' degree and longitude is '+longitude+' degree.')

        }
    })
}

module.exports = forecast