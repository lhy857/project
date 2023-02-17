const mongoose = require('mongoose');
const { getMeta, preSave } = require('../helpers');

const InventorySchema = new mongoose.Schema({
    type: String,
    num: Number,
    user: String,

    meta: getMeta(),
});

InventorySchema.pre('save', preSave);

mongoose.model('InventoryLog', InventorySchema);