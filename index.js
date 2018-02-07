require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const logger = require('morgan');
const profitsRoutes = require('./profits/routes');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(logger('dev'));
app.use('/', profitsRoutes);

app.listen(PORT);

module.exports = app;
