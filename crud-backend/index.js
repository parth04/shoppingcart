//Importing Modules

var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require ('body-parser');
var cors = require ('cors');
const route = require ('./route/routes')
var app = express();

//Connect to mongodb
mongoose.connect("mongodb://localhost:27017/shoppingcart");

//On connection
mongoose.connection.on('connected', () => {
    console.log('Connected to mongoDb at port 27017!')
});

//On error
mongoose.connection.on('error', (err) => {
    console.log(err);
});

app.listen(3002, () => {
    console.log('Hurray! App has been started.');
});

//Adding cors
app.use(cors());

//Body-parser
app.use(bodyparser.json());

app.use('/api',route)


/*app.get('/', (req, res) => {
    res.send("Hello Parth")
})*/