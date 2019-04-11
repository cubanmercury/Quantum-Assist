const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const session = require('express-session');
const db = require('../models/db.js');  //mysql database connection path
const config = require('../src/config/config');

const app = express();
const routes = require('./routes')(app);

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

db.connect((err) => {
    if(err){
        console.log("DB Connection Failed \n" + err);
    }
    else{
        app.listen(config.port);
        console.log("DB Connection Successful");
    }
})

module.exports = app;
