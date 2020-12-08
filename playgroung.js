const http = require('http')
const url = 'http://api.weatherapi.com/v1/current.json?key=54b1322dde654cd5b99105606201511&q=Mumbai'

const request = http.request(url , (response)=>{
    let data = ''
    response.on('data' , (chunk)=>{
       data = data + chunk.toString()
    })

    response.on('end' , ()=>{
       let body = JSON.parse(data)
       console.log(body.location.name)
       console.log(body.current.temp_c)
    //    let text = body.text
    //    console.log(text)
    })
})

request.end()

