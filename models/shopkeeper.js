// Express is a server side javascript framework for creating web services, built on the top of the nodeJS
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

// Defining item table schema
var ItemSchema = mongoose.Schema({
    title:{
        type: String,
        require: true
    },
    price: Number,
    categoryId: Number,
    isAvail:{
        type:  Boolean,
        default: true
    }
})

// Defining category table Schema
var CategorySchema = mongoose.Schema({
    title: {
      type: String,
      require : true
    },
    id : Number
})

// Defining item table schema
var ItemSchema = mongoose.Schema({
    title:{
        type: String,
        require: true
    },
    price: Number,
    categoryId: Number,
    isAvail:{
        type:  Boolean,
        default: true
    }
})

// Defining the cart schema
var CartSchema = mongoose.Schema({
    userEmail:{
        type: String,
        require: true
    },
    productId:{
        type: String,
        require: true
    }
})

// making the reference for the table
var Category = mongoose.model('categoryModel', CategorySchema, 'category');
var Item = mongoose.model('itemModel', ItemSchema, 'item');
var Cart = mongoose.model('cartModel', CartSchema, 'cart');

// getCategory request
router.get('/getCategory', (req, res)=>{
    res.set({
        // to set type of response and allowing response from lh:4200 port
        'Content-type' : 'application/json',
        'Access-Control-Allow-Origin' : 'http://localhost:4200'
    });
  
    // fetching data from database and sending as a response
    Category.find({}, function(err, success){
        if(err){
            throw err;
        }
        else{
            console.log('Get Category request was fired!');
            res.send(success);
        }
    });
});
  
  
// getItem request for a particular category
router.get('/getItem/:categoryId', (req, res)=>{
      var categoryId = req.params.categoryId;
      var query = {"categoryId" : categoryId};
  
      res.set({
          // to set type of response and allowing response from lh:4200 port
          'Content-type' : 'application/json',
          'Access-Control-Allow-Origin' : 'http://localhost:4200'
      });
      
      // fetching data from database and sending as a response
      Item.find(query, function (err, success){
          if(err){
              throw err;
          }
          else{
              console.log(`Get Item request was fired for category id: ${categoryId}.`);
              res.send(success);
          }
      });
});

// to post a new item to database
router.post('/addItem', (req, res) =>{
    let item = req.body;
    console.log(`New Item added : ${JSON.stringify(item)}`);

    res.set({
        'Content-Type' : 'application/json',
        'Access-Control-Allow-Origin' : 'htpp://localhost:4200'
    })

    Item.create(item, function(err, success){
        if(err){
            console.log("The error is:" + err);
            res.status(400);
            res.send(err);
        }
        else{
            console.log("The success is :" + success);
            res.send(success);
        }
    })
});


// put request to handle update query from express
// the identifier with the : is value e.g. bookTitle
router.put('/updateItem/:itemId', (req, res)=>{
    console.log(`Item to update: ${JSON.stringify(req.body)}`);
    var itemId = req.params.itemId;
    var query = {"_id" : itemId};

    update = req.body;

    res.set({
        'Content-Type' : 'application/json',
        'Access-Control-Allow-Origin' : 'htpp://localhost:4200'
    });

    Item.findOneAndUpdate(query, update, (err,book)=>{
        if(err){
            res.status(500);
            res.send(err);
        }
        else{
            res.send(book);
        }
    });
})

// to delete an item from database
router.delete('/deleteItem/:itemId', (req, res)=>{
    var itemId = req.params.itemId;
    console.log(`Deleting item: ${itemId}`);

    var query = {"_id": itemId};

    res.set({
        'Content-Type' : 'application/json',
        'Access-Control-Allow-Origin' : 'htpp://localhost:4200'
    });

    Item.findOneAndRemove(query, (err,success)=>{
        if(err){
            res.status(500);
            res.send(err);
        }
        else{
            res.send(success);
        }
    });

})


module.exports = router;