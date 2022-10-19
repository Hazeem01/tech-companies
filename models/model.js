const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    companyName: {
        required: true,
        type: String
    },
    registrationNumber: {
        required: false,
        type: Number
    },
    headOffice: {
        required: true,
        type: String
    },
    phone: {
        required: true,
        type: Number
    },
    email: {
        required: false,
        type: String
    },
    website: {
        required: false,
        type: String
    },
    numberOfEmployees: {
        required: false,
        type: Number
    }
})

module.exports = mongoose.model('Data', dataSchema)