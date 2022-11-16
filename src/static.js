let express = require('express')
let path = require('path')
let app = express()
let port = 8220

let staticapth = path.join('D:/Express/public')
app.use(express.static(staticapth))


app.listen(port,function () {
    console.log(`listening to the port no.${port}`)
})