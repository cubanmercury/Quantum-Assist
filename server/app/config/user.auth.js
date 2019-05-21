const LocalStrategy = require('passport-local').Strategy;
const user = require('../models/user.model.js');
const bcrypt = require('bcryptjs');

module.exports = (passport) => {
    passport.serializeUser((user, next) => {
        next(null, user)
    });

    passport.deserializeUser((id, next) => {
        user.findById(id, (err, user) => {
            next(err, user)
        })
    });

    const localLogin = new LocalStrategy({
        emailField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }, (req, email, password, next) => {
        user.findOne({u_email: email}, (err, user) => {
            if(err){
                return next(err);
            }
            if(user == null){
                return next(new Error("User not found"));
            }
            if(bcrypt.compareSync(password, user.u_hashedPwd) == false){
                return next(new Error('Incorrect Password'));
            }
        
            return next(null, user);
        });
    });
    
    passport.use('localLogin', localLogin);

    const localRegister = new LocalStrategy({
        emailField: 'email',
        nameField: 'name',
        passwordField: 'password',
        dateField: new Date(),
        passReqToCallback: true
    }, (req, username, email, password, date, next) => {
        user.findOne({u_email: email}, (err, user) => {
            if(err){
                return next(err);
            }
            if(user != null){
                return next(new Error('Email already used for another account'));
            }
            const hashedPwd = bcrypt.hashSync(password, 10);
            user.create({u_email: email, u_name: name, u_hashedPwd: hashedPwd, u_signedUp: date}, (err, user) => {
                if(err){
                    return next(err);
                }         
                next(null, user);
            })
        })
    });

    passport.use('localRegister', localRegister);
}