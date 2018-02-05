const Profit = require('./model');

const getProfits = async (req, res) => {
  try {
    const profits = await Profit.find({});
    res.send(profits);
  } catch (err) {
    res.status(400).send(err);
  }
};

const getProfitById = (id) => {

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
