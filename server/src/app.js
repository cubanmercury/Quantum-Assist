const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const session = require('express-session');
const db = require('../models/db.js');  //mysql database connection path
const routes = require('./routes');
const config = require('../src/config/config');

const app = express();

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cors());

app.use(session({
    secret: 'cactus snacks',
    resave: false,
    saveUninitialized: true
}))

app.listen(config.port);
