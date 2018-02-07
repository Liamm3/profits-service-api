const {ObjectID} = require('mongodb');

const profits = [{
  _id: new ObjectID(),
  amount: 400.5,
  name: 'Payment 1',
  year: new Date(2018, 1),
}, {
  _id: new ObjectID(),
  amount: -25.25,
  name: 'Payment 2',
  year: new Date(2017, 11),
}, {
  _id: new ObjectID(),
  amount: -50,
  name: 'Payment 3',
  year: new Date(2018, 1),
}];

module.exports = profits;
