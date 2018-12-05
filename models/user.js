// Express is a server side javascript framework for creating web services, built on the top of the nodeJS
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

// Defining category table Schema
var UserSchema = mongoose.Schema({
    name: {
      type: String,
      require : true
    },
    email: {
      type: String,
      unique: true,
      require : true
    },
    password: {
      type: String,
      require : true
    },
    user: {
      type: String,
      require : true
    },
    id : {
      type: Number,
      // require: true
    }
})


var Users = mongoose.model('userModel', UserSchema, 'user');

router.post('/authenticate', (request, response)=> {
    // console.log(`The request is: ${request.body}`);
    // var user = JSON.parse(request.body);

    var user = request.body;
    console.log(`USER: ${user}`);

    var emailId = user.email;
    console.log(`Email in server: ${user.email}`);

    response.set({
        // to set type of response and allowing response from lh:4200 port
        'Content-type' : 'application/json',
        'Access-Control-Allow-Origin' : 'http://localhost:4200'
    });

    var query = {"email" : emailId};
    // fetching data from database and sending as a response
    Users.find(query, function(err, succ){
        console.log(`Response status: ${response.status}`);
        if(err)
          response.json({message: "Not found"})
        else {
          response.json({message: "found"})
        }
        // console.log(response);
        response.send();
            // if(err){
                //     throw err;
                // }
                // else {
                //     console.log('The password is:' + succ);
                //     response.send(succ);
                // }
    });
});


router.post('/newuser', (req,res) =>{
    let user = req.body;
    var query = {"email" : user.email};

    console.log('Query : ' + JSON.stringify(query));

    let exist = Users.findOne(query);

    if(exist){
      console.log('User exists');
    }
    else{
      console.log("null");
    }

    res.set({
        'Content-Type' : 'application/json',
        'Access-Control-Allow-Origin' : 'http://localhost:4200'
    })

    if(exist){
      res.json({message: "Already Exists"})
      res.send();
    }
    else{
      //craete user
      Users.create(user, function(err, succ){
        if(err){
            console.log("The error is:" + err);
            res.status(400);
            res.send(err);
        }
        else{
            console.log("User created is:" + succ);
            res.send(succ);
        }
    });
  }
});

module.exports = router;
