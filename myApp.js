let express = require('express');
let app = express();
console.log("Hello World");
app.use('views', path.join(__dirname, 'views'))

app.get('/', (req,res) => {
    res.sendFile('index')
})


































 module.exports = app;
