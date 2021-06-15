const mongoose = require('mongoose');

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

const donor = mongoose.model('Donor', donorSchema);

module.exports = donor;