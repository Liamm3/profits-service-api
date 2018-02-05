const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profitSchema = new Schema({
  amount: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
  },
  month: {
    type: Number,
    required: true,
    min: 0,
    max: 11,
  },
});

module.exports = mongoose.model('Profit', profitSchema);
