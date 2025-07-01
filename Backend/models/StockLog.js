// models/StockLog.js
const mongoose = require('mongoose');

const stockLogSchema = new mongoose.Schema({
    change_type: String,
    location: String,
    item_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Item' },
    unit_type: {
        type: { type: String },
        quantity: { type: Number }
    },
    item_count: Number,
    notes: String,
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('StockLog', stockLogSchema);
