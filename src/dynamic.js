//Requiring the module
let express = require('express')
let app = express()
let path = require ('path')
let hbs = require('hbs')
let port = 4500

//Path of file
let staticapth = path.join("D:/back-end/Express/public")
let template = path.join("D:/back-end/Express/template/views")
let part = path.join("D:/back-end/Express/template/partials")

//to set the view engine
app.set('view engine',"hbs")
app.set("views",template)
hbs.registerPartials(part)

//template engine route
app.get('/',function (req,res) {
    res.render("D:/back-end/Express/template/views/index.hbs",{
        call:"Home"
    }
    )
})

app.get("/about",function(req,res) {
    res.render("D:/back-end/Express/template/views/about.hbs")
})

app.get("/service",function (req,res) {
    res.render("D:/back-end/Express/template/views/service.hbs")
})




app.use(express.static(staticapth))


app.listen(port,function () {
    console.log(`listening to the port no.${port}`)
})