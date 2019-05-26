const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user.model.js');
const bcrypt = require('bcryptjs');

module.exports = (passport) => {
    passport.serializeUser((user, next) => {
        next(null, JSON.stringify(user));
    });

    passport.deserializeUser((packet, next) => {
        next(null, JSON.parse(packet));
    });

    //---------------------------------------------------LOGIN FLOW

    const localLogin = new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }, ( req, email, password, done) => {
        if(email){
            console.log(email);
        }
        if(password){
            console.log(password);
        }
        // if(!req.email || !req.password){
        //     return done(null, {
        //         message: "Form fields are empty"
        //     })
        // }
        User.findOne({
            where: {
                u_email: email
            }
        }).then((user) => {
            if(!user){
                return done(null, {
                    message: "User not found"
                })
            }
            // else if(bcrypt.compareSync(password, user.u_hashedPwd) == false){
            //     return done(null, {
            //         message: "Incorrect Password"
            //     })
            // }
            else{
                return done(null, user);
            }
        }).catch((err) => {
            console.log("Error: " + err);
            return done(null, {
                message: "Error occurred"
            })
        })
            
        


        // User.findOne({u_email: email}, (err, user) => {
        //     if(err){
        //         return next(err);
        //     }
        //     if(user == null){
        //         return next(new Error("User not found"));
        //     }
        //     if(bcrypt.compareSync(password, user.u_hashedPwd) == false){
        //         return next(new Error('Incorrect Password'));
        //     }
        
        //     return next(null, user);
        // });
    });
    
    passport.use('localLogin', localLogin);
    
//---------------------------------------------------REGISTER FLOW

    // passport.use(new LocalStrategy(
    //     (email, password, next) => {
    //         User.findOne({email: email}, (err, user) => {
    //             if(err){
    //                 return next(err);
    //             }
    //             if(!user){
    //                 return next(new Error("User not found"));
    //             }
    //             if(bcrypt.compareSync(password, user.u_hashedPwd) == false){
    //                 return next(new Error('Incorrect Password'));
    //             }
    //             return next(null, user);
    //         })
    //     })
    // )















    const localRegister = new LocalStrategy({
        usernameField: 'email',
        nameField: 'name',
        passwordField: 'password',
        dateField: new Date(),
        passReqToCallback: true
    }, (email, password, date, next) => {
        User.findOne({u_email: email}, (err, user) => {
            if(err){
                return next(err);
            }
            if(user != null){
                return next(new Error('Email already used for another account'));
            }
            const hashedPwd = bcrypt.hashSync(password, 10);
            User.create({u_email: email, u_name: name, u_hashedPwd: hashedPwd, u_signedUp: date}, (err, user) => {
                if(err){
                    return next(err);
                }         
                next(null, user);
            })
        })
    });

    passport.use('localRegister', localRegister);
}