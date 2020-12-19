const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const newSchema = new Schema({
    customId: Number,
    wish_item: String
})
module.exports = mongoose.model('MyWishes',newSchema);