const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const hotelSchema = new Schema({
    id: String,
    name: String,
    address: String,
    rating: String,
    reviews: String,
    image: String,
});

module.exports = mongoose.model('hotel', hotelSchema, 'hotels');