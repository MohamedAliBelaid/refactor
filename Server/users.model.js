const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema 
let User = new Schema({
    Id: {
        type: String,
        required: true
    },
    FirstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    Role: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('User', User);