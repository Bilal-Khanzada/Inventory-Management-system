const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    item_category: String,
    item_name: String,
    item_colour: String,
    unit_type: {
        type: { type: String },
        quantity: { type: Number }
    },
    upper_limit: Number,
    lower_limit: Number,
});

module.exports = mongoose.model('Item', itemSchema);
