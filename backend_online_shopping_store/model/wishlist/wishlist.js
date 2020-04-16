const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Wishlist = new Schema({

    _id: {
        type: String,
        required: true
    },

    DressPrice: {
        type: String,
        required: true
    },

    images: {
        type: String
    },

    UserId: {
        type: String,
        required: true
    }
},
    {
        collection: 'Wishlist'
    });

module.exports = mongoose.model('Wishlist', Wishlist);
