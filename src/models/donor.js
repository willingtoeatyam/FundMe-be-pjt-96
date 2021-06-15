const mongoose = require('mongoose');

//Creating a Donor Schema
const donorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: [true, 'email already in database']
    },
    phone: Number,
    location: {
        type: String,
        required: true
    },
    category: {
        type: String,
        default: 'donor',
        required: true
    }
})

//Creating a Donor Model with the above schema
const donor = mongoose.model('Donor', donorSchema);

//Exporting the donor model
module.exports = donor;