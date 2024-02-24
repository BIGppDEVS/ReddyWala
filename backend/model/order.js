const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    hotelId: String,
    productIds: [{productId: String, status: String, quantity: Number}],
    status: String,
    userId: String

});

module.exports = mongoose.model('order', orderSchema,'orders');