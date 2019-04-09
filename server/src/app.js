const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const session = require('express-session');
const db = require('../models/db.js');  //mysql database connection path

const app = express();

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cors());

if(global.SQLpool === undefined){
    global.SQLpool = db.createPool();
}

app.use(session({
    secret: 'cactus snacks',
    resave: false,
    saveUninitialized: true
}))

app.get('/status', (req, res) => {
    res.send({
        message: "hello world"
    })
})

app.post('/register', (req, res) => {
    res.send({
        message: `Hello ${req.body.email}, you are now registered`
    })
})

app.listen(process.env.PORT || 8081);