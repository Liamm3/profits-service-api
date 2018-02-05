require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB);

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT);

module.exports = app;
