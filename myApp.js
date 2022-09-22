let express = require('express');
let app = express();
console.log("Hello World");

app.get('/', (req,res) => {
    res.sendFile('/views/index')
})


































 module.exports = app;
