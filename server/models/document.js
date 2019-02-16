const mongoose = require('mongoose');

const DocumentSchema = mongoose.Schema({
  title: String,
  content: String,
  img: String,
  marketing: Boolean,
  trunc: String,
});

module.exports = mongoose.model('Document', DocumentSchema);
