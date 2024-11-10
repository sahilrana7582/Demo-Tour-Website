const express = require('express');
require('dotenv').config;
const tourRoutes = require('./routes/tourRoutes');
const userRoutes = require('./routes/userRoutes');
const morgan = require('morgan');
const dbConnect = require('./database/dbConnect');
const app = express();

//Middlewares
app.use(express.json());
app.use(morgan('dev'));

const PORT = process.env.PORT;

app.use('/api/v1/tours', tourRoutes);
app.use('/api/v1/users', userRoutes);
dbConnect();

module.exports = app;
