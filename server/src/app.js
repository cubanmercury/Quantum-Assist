const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const morgan = require('morgan');
const session = require('express-session');
const db = require('../models/db.js');  //mysql database connection path
const config = require('../src/config/config');
const redis = require('redis');
const client = redis.createClient();
const redisStore = require('connect-redis')(session);

const app = express();


//middleware
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(cors());
app.use(cookieParser());

app.use(session({
    secret: 'cactusSnacks',
    name: '_quantumAssist',
    store: new redisStore({host: 'localhost', port: 6379, client: client, ttl: 260}),
    resave: false,
    saveUninitialized: false
}));

client.on('error', (err) => {
    console.log('Redis error: ', err);
  });

//import routes
const registerRouter = require('../routes/register');
const loginRouter = require('../routes/login');

//assigning paths to routes
app.use('/register', registerRouter);
app.use('/login', loginRouter);


app.listen(config.port);

module.exports = app;
