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
  year: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model('Profit', profitSchema);
