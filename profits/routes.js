const express = require('express');
const controller = require('./controller');

const router = new express.Router();

router.get('/profits', controller.getProfits);
router.get('/profits/:id', controller.getProfitById);
router.post('/profits', controller.createProfit);
router.put('/profits/:id', controller.updateProfit);
router.delete('/profits/:id', controller.deleteProfit);

module.exports = router;
