const {ObjectID} = require('mongodb');
const Profit = require('./model');

const getProfits = async (req, res) => {
  try {
    const profits = await Profit.find({});
    return res.send(profits);
  } catch (err) {
    return res.status(400).send(err);
  }
};

const getProfitById = async (req, res) => {
  const {id} = req.params;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  try {
    const profit = await Profit.findById(id);

    if (!profit) {
      return res.status(404).send();
    }

    return res.send(profit);
  } catch (err) {
    return res.status(400).send(err);
  }
};

const createProfit = (value, name, month) => {

};

const updateProfit = (profit, id) => {

};

const deleteProfit = (id) => {

};

module.exports = {
  getProfits,
  getProfitById,
  createProfit,
  updateProfit,
  deleteProfit,
};
