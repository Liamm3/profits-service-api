require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const profitsRoutes = require('./profits/routes');

mongoose.connect(process.env.MONGODB);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', profitsRoutes);

app.listen(PORT);

module.exports = app;
