const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema 
let Point = new Schema({
    userId: {
        type: Number,
        required: true
    },
    userStatus: {
        type: String,
        required: true
    },
    userStatusTime: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Point', Point);