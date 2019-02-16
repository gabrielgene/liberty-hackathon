const mongoose = require('mongoose');

const LeadSchema = mongoose.Schema({
  name: String,
  tel: String,
  service: String,
  cpf: String,
  location: String,
  bided: Boolean,
});

module.exports = mongoose.model('Lead', LeadSchema);
