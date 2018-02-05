const {ObjectID} = require('mongodb');

const profits = [{
  _id: new ObjectID(),
  amount: 400.5,
  month: 1,
}, {
  _id: new ObjectID(),
  amount: -25.25,
  month: 10,
}, {
  _id: new ObjectID(),
  amount: -50,
  month: 5,
}];

module.exports = profits;
