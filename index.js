require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const mongoString = process.env.DATABASE_URL;
const app = express();

mongoose.connect(mongoString);
const database = mongoose.connection;
const port = 3000;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

app.use(express.json());

app.listen(process.env.PORT || port, () => {
    console.log(`Server Started at ${3000}`)
})

app.use('/', routes)
