const request = require('request')



const geocode = (address , callback)=>{
    var geocodeurl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address +'.json?access_token=pk.eyJ1Ijoic3VtaXRudWIiLCJhIjoiY2toamNhZmt2MTlxcDJybWN4dm14ajBtbiJ9._J4dJ_ctAjNyDp6GhaKECA&limit=1'

    request({url: geocodeurl,json:true},(error, response)=>{
        if (error) {
            callback('check your internet' , undefined)
        } else if (response.body.features.length == 0) {
            callback('location not found' , undefined)
        }
        else{
        
        callback(undefined, {
             place : response.body.features[0].place_name,
             longitude :response.body.features[0].center[0],
             latitude : response.body.features[0].center[1]
        } )
        }
    })

}

module.exports = geocode