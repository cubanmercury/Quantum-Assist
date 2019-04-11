const db = require('../models/db.js');

exports.post = (req, res) => {
    db.createUser()
}


module.exports = (app) => {
    app.get('/status', (req, res) => {
        res.send({
            message: "hello world"
        })
    })
    
    
    
    app.post('/regster', (req, res) => {
        exports.post = (req, res) => {
            db.postUser()
        }
    })

    app.post('/register', (req, res) => {
        res.send({
            message: `Hello ${req.body.email}, you are now registered`
        })
        db.query('SELECT * FROM users', (err, res, fields) =>{
            if(err){
                console.log(err);
            }
            else{
                console.log(res);
            }
        })
        
    })
}
