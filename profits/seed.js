const {ObjectID} = require('mongodb');

const profits = [{
  _id: new ObjectID(),
  amount: 400.5,
  name: 'Payment 1',
  month: 1,
}, {
  _id: new ObjectID(),
  amount: -25.25,
  name: 'Payment 2',
  month: 10,
}, {
  _id: new ObjectID(),
  amount: -50,
  name: 'Payment 3',
  month: 5,
}];

module.exports = profits;
