// models/Stock.js
const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
    location: String,
    item_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Item' },
    unit_type: {
        type: { type: String },
        quantity: { type: Number }
    },
    item_count: Number,
    notes: String
});

module.exports = mongoose.model('Stock', stockSchema);
