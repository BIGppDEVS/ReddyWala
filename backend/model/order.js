const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    id: String,
    hotelId: String,
    productIds: [{productId: String, status: String}],
    status: String,
    userId: String

});

module.exports = mongoose.model('order', orderSchema,'orders');