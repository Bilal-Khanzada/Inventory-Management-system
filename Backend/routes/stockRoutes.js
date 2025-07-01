// routes/stockRoutes.js
const express = require('express');
const Item = require('../models/Item');
const Stock = require('../models/Stock');
const StockLog = require('../models/StockLog');
const TransferTable = require('../models/TransferTable');

const router = express.Router();

// Create an Item
router.post('/items', async (req, res) => {
    try {
        const newItem = new Item(req.body);
        await newItem.save();
        res.status(201).json(newItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Create Stock
router.post('/stocks', async (req, res) => {
    try {
        const newStock = new Stock(req.body);
        await newStock.save();
        res.status(201).json(newStock);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Log Stock Changes
router.post('/stocklog', async (req, res) => {
    try {
        const newStockLog = new StockLog(req.body);
        await newStockLog.save();
        res.status(201).json(newStockLog);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Create a Transfer
router.post('/transfers', async (req, res) => {
    try {
        const newTransfer = new TransferTable(req.body);
        await newTransfer.save();
        res.status(201).json(newTransfer);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
