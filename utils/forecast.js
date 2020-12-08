const request = require('request')

const forecast = (lati, longi , callback)=>{
    const forecasturl = 'http://api.weatherapi.com/v1/current.json?key=54b1322dde654cd5b99105606201511&q='+ lati+','+longi+''

    request({ url: forecasturl , json : true} , (error , response)=>{
        if (error) {
            callback('Please check your internet Connection' , undefined)
        } else if(response.body.error) {
            callback(response.body.error.message , undefined)
        }
        else{
            callback(undefined , {
                name : response.body.location.name,
                temp :  response.body.current.temp_c,
                rain : response.body.current.precip_in
            })
        }
    })
}

module.exports = forecast