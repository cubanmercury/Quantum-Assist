const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const session = require('express-session');
const redis = require('redis');
const client = redis.createClient();
const redisStore = require('connect-redis')(session);

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
client.on('error', (err) => {
    console.log('Redis error: ', err);
});

const db = require('./app/config/db.config.js');
//force: true => will drop table if it already exists
db.sequelize.sync({force: true}).then(() => {
    console.log('Drop and Resync with {force: true}');
});

//import routes
//const registerRouter = require('../routes/register');
//const loginRouter = require('../routes/login');
const userRouter = require('./app/routes/user.route.js')(app);

//assigning paths to routes
//app.use('/register', registerRouter);
//app.use('/login', loginRouter);
app.use('/user', userRouter);

var server = app.listen(8080, function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log("App listening at http://%s:%s", host, port);
});

module.exports = app;
