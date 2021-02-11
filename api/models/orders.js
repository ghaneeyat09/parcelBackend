const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    pickup: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    recName: {
        type: String,
        required: true
    },
    recPhoneNo: {
        type: Number,
        required: true
    },
    weight: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "ready to pick"
    },
    presentLoc: {
        type: String,
        default: ""
    }
});

module.exports = mongoose.model('Order', orderSchema);