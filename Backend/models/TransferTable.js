// models/TransferTable.js
const mongoose = require('mongoose');

const transferTableSchema = new mongoose.Schema({
    sender_location: String,
    receiver_location: String,
    status: String,
    image: String,
    items: [
        {
            item_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Item' },
            unit_type: {
                type: { type: String },
                quantity: { type: Number }
            },
            item_count: Number
        }
    ]
});

module.exports = mongoose.model('TransferTable', transferTableSchema);
