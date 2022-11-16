let express = require('express')
let app = express()
let port = 4890


app.get('/',function (req,res) {
    res.send("Hello what are you doing guys at home")
    
})

app.get('/temp',function (req,res) {
   
    
    res.json(
        {
            "id":7,
            "name":"ahir"
        }
    )
})

app.listen(port,function () {
    console.log(`Litening to the port no.${port}`)
})