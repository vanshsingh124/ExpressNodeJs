let express = require('express')
let app = express()
let path = require('path')
let hbs = require('hbs')

let port = 7890

let static = path.join('D:/Express/public')
let template = path.join('D:/Express/template/views')
let partials = path.join('D:/Express/template/partials')


app.set("view engine","hbs")
app.set("views",template)
hbs.registerPartials(partials)


app.get('/',function (req,res) {
    res.render('index',{
        call:'Go Home'
    })
})

app.get('/service',function (req,res) {
    res.render('service')
    
})

app.get('/about',function (req,res) {
    res.render('about',{
        ter : req.query.name,
        age : req.query.age
    })
    
})

app.get("/contact",function (req,res) {
    res.render("contact")
    
})

app.use(express.static(static))

app.listen(port,function () {
    console.log(`Listening to the port no.${port}`)
    
})