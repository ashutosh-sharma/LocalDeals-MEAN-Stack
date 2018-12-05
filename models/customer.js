// Express is a server side javascript framework for creating web services, built on the top of the nodeJS
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var schema = require('./schema');

// Defining the cart schema
var CartSchema = mongoose.Schema({
    userEmail:{
        type: String,
        require: true
    },
    productId:{
        type: String,
        require: true
    },
    productName:{
        type: String,
        require: true
    }
})

// making the reference for the table
var Cart = mongoose.model('cartModelCust', CartSchema, 'cart');

// adding the orderedItem into the cart
router.post('/addToCart', (req, res) =>{
    let orderItem = req.body;
    console.log(`Adding product to cart. reqest received at serverSide.`);

    res.set({
        'Content-Type' : 'application/json',
        'Access-Control-Allow-Origin' : 'htpp://localhost:4200'
    })

    Cart.create(orderItem, function(err, success){
        if(err){
            console.log("The error is:" + err);
            res.status(400);
            res.send(err);
        }
        else{
            console.log("Succesful! The orderedItem is :" + success);
            res.send(success);
        }
    })
});


// getting orderedItem from cart
router.get('/getCart', (req, res)=>{
    res.set({
        // to set type of response and allowing response from lh:4200 port
        'Content-type' : 'application/json',
        'Access-Control-Allow-Origin' : 'http://localhost:4200'
    });
  
    // fetching data from database and sending as a response
    Cart.find({}, function(err, success){
        if(err){
            throw err;
        }
        else{
            console.log('Get Category request was fired!');
            res.send(success);
        }
    });
});
  

module.exports = router;