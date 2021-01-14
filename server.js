require('dotenv').config();
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Vehicle = require('./models/car'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
const mongourl = process.env.DATABASE_URL;
mongoose.Promise = global.Promise;
mongoose.connect(mongourl,{useNewUrlParser: true}, {useUnifiedTopology: true})
    .then(client =>{ console.log("Connection success"); })
    .catch(err => console.error('Connection error', err));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes/routes'); //importing route
routes(app); //register the route



app.listen(port);


console.log('server started on: ' + port);