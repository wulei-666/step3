const mongoose = require('./db.js');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  title: { type: String }
});

module.exports = mongoose.model('Product', ProductSchema);