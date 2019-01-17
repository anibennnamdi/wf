/*var express = require('express'),
    mongoose = require('mongoose')
var devotion = express()
var Schema = mongoose.Schema
var postSchema = new Schema({

    customerContact: {
        type: String,
        required: true,

    },
    productName: {
        type: String,
        required: true
    },
    productUnit: {
        type: String,
        required: true
    },
    productQty: {
        type: Number,
        required: true
    },
    customerName: {
        type: String,
        required: true
    },
    productDate: {
        type: Date,
        required: true
    }
})
var Post = dbConnection.model('Post', postSchema, 'stock')//here we are craeting a model from the Schema
module.exports = mongoose.model('Stockcont', postSchema);*/