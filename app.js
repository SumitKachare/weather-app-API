const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


const cmd =  process.argv[2]

if (!cmd) {
    console.log("Enter a Address ")
} else {
    geocode(cmd , (error, data)=>{
        if (error) {
            console.log('Error : ' , error)
        } else {
            // console.log('Data : ' , data)
            console.log(`Location is : ${data.place}`)
        }
        
        forecast(data.latitude,data.longitude, (error , data)=>{
            if(error){
                console.log('error : ' , error)
            }
            else{
                //  console.log('Data : ' , data)
                console.log(`It is currently ${data.temp} degrees out in ${data.name} . There is a ${data.rain} chance of rain !!`)
            }
        
        })
    })  
}
