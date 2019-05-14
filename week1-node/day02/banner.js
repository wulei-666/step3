const mongoose = require('./db.js');
const Schema = mongoose.Schema;

const BannerSchema = new Schema({
  img: { type: String }
});

module.exports = mongoose.model('MyBanner', BannerSchema);