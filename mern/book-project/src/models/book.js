const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
	name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image:{
        type: String,
        required: false,
    }
});

module.exports = mongoose.model('Book', BookSchema);