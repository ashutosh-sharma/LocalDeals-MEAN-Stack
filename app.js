// TODO REMOVE THE MONGOOSE AND EXPRESS REQUIRE FROM BELOW
var express = require('express');
var app = express();

var bodyParser = require('body-parser')
var mongoose = require('mongoose');
var config = require('./config.json');

mongoose.connect(config.connectionString);
app.use(bodyParser.json());

// Hosting /static 's content on backend --- specificly index.html in /static
app.use('', express.static('static'));
app.use('/home', express.static('static'));

// Routing the /shopkeeper request to shopkeeper.js
var shopkeeperRoute = require('./models/shopkeeper');
app.use('/shopkeeper', shopkeeperRoute);

// Routing the /shopkeeper request to shopkeeper.js
var customerRoute = require('./models/customer');
app.use('/customer', customerRoute);

// Routing the /user/newuser request to shopkeeper.js
var userRoute = require('./models/user');
app.use('/user', userRoute);

const port  = 1354;
app.listen(port, ()=> {
        console.log('App listening on port 1354!');
});