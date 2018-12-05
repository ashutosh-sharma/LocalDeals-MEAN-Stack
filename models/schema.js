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
