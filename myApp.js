let express = require('express');
let app = express();
console.log("Hello World");
app.use(express.static(__dirname + "/public"))
require('dotenv').config()

app.use('/', (req,res,next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next()
})

app.get('/', (req,res) => {
    res.sendFile(__dirname + "/views/index.html")
})

app.get("/json", (req,res) => {
    res.json((process.env.MESSAGE_STYLE == "uppercase") ? {message: "HELLO JSON"} : {message: "Hello json"})
})

app.get('/now',(req,res) =>{
    req.time = Date().toString()
    req.json({time: req.time})
})

 module.exports = app;
//  app.listen(3000,() => {
//     console.log("listening on port 3000")
//  })
