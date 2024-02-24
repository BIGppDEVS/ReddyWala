const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const menuSchema = new Schema({
    name: String,
    hotelId: String,
    rating: String,
    price: Number,
    image: String,
    description: String,
});

module.exports = mongoose.model('menu', menuSchema, 'menus');