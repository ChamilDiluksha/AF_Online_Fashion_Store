const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
    _id: {
        type:String,
        required: true
    },

    UserID:{
        type:String,
        required: true
    },

    Type:{
        type:String,
        required: true
    },
    Username: {
        type: String,
        required: true,
        unique: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    Password: {
        type: String,
        required: true
    },

    LastLogin: {
        type: Date,
        default:null
    },

    Token: {
        type: String,
        default:null
    }
},{
    collection: 'User'
});

module.exports = mongoose.model('User', User);