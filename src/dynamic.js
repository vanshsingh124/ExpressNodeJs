//Requiring the module
let express = require('express')
let app = express()
let path = require ('path')
let hbs = require('hbs')
let port = 4500

//Path of file
let staticapth = path.join("D:/Express/public")
let template = path.join("D:/Express/template/views")
let part = path.join("D:/Express/template/partials")

//to set the view engine
app.set('view engine',"hbs")
app.set("views",template)
hbs.registerPartials(part)

//template engine route
app.get('/',function (req,res) {
    res.render("index",{
        call:"Home"
    }
    )
})

app.get("/about",function(req,res) {
    res.render("about")
})

app.get("/service",function (req,res) {
    res.render("service")
})




app.use(express.static(staticapth))


app.listen(port,function () {
    console.log(`listening to the port no.${port}`)
})