const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Category = new Schema({

    CategoryID: {
        type: String,
        required: true
    },

    CategoryType: {
        type: String,
        required: true
    },

    SubType: {
        type: String,
        required: true
    },

    stages: {
        type: [{
            stageNo: {
                type: Number
            },
            stage: {
                type: String
            }
        }]
    },

    description: {
        type: String,
        required: true
    }
},
{
    collection: 'Category'
});

module.exports = mongoose.model('Category',Category);
