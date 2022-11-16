let exp = require('express')
let app = exp()
app.get('/',function (req,res) {
    res.send("Hello the day is very nice at home")
    
})
app.get('/about',function (req,res) {
    res.send("Our aboout page is very nice and beautiful")
    
})
app.listen(5800)

// const express = require('express')
// const app = express()

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// app.listen(3000)