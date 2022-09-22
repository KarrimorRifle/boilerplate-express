let express = require('express');
let app = express();
console.log("Hello World");
app.use(express.static(__dirname + "/public"))
require('dotenv').config()

app.get('/', (req,res) => {
    res.sendFile(__dirname + "/views/index.html")
})

app.get("/json", (req,res) => {
    console.log(process.env.MESSAGE_STYLE)
    res.send(process.env.MESSAGE_STYLE)
    res.json((process.env.MESSAGE_STYLE == "uppercase") ? {message: "HELLO JSON"} : {message: "Hello json"})
})








 module.exports = app;
//  app.listen(3000,() => {
//     console.log("listening on port 3000")
//  })
