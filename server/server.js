const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const session = require('express-session');
const redis = require('redis');
const client = redis.createClient();
const redisStore = require('connect-redis')(session);
const passport = require('passport');
const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
}
const app = express();


//middleware
app.use(cors(corsOptions));
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(session({
    secret: 'cactusSnacks',
    name: '_quantumAssist',
    store: new redisStore({host: 'localhost', port: 6379, client: client, ttl: 260}),
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
client.on('error', (err) => {
    console.log('Redis error: ', err);
});

const db = require('./app/config/db.config.js');
//force: false => will not drop table if it already exists
db.sync({force: false}).then(() => {
    console.log('Resync with {force: false}');
});

const userAuth = require('./app/config/user.auth.js')(passport);
//import routes
const registerRouter = require('./app/routes/register.route.js');
const loginRouter = require('./app/routes/login.route.js');
const userRouter = require('./app/routes/user.route.js');

//assigning paths to routes
app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/user', userRouter);

var server = app.listen(8081, "127.0.0.1", function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log("App listening at http://%s:%s", host, port);
});

module.exports = app;
