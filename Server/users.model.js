const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema 
let User = new Schema({
    userId: {
        type: Number,
        required: true
    },
    userFirstName: {
        type: String,
        required: true
    },
    userLastName: {
        type: String,
        required: true
    },
    userPassword: {
        type: String,
        required: true
    },
    userRole: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('User', User);