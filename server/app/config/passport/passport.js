const db = require('../db.config');
const User = db.users;
const bCrypt = require('bcryptjs');
const LocalStrategy = require('passport-local').Strategy;

module.exports = (passport) => {
    //Serialize user
    passport.serializeUser(function(user, done) {
        console.log(user);
        done(null, user);
    });
    // deserialize user 
    passport.deserializeUser(function(user, done) {
        User.findOne({
            where: {
                id: user.id
            }
        }).then(user => {
            if (user) {
                done(null, user.get());
            } else {
                done(user.errors, null);
            }
        }).catch(err => {
            console.log("Error ---> " + err);
        });
    });

    //LOCAL REGISTER STRATEGY
    passport.use('localRegister', new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },(req, email, password, done) => {
            function generateHash(password) {
                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
            };

            console.log(User);
            User.findOne({
                where: {
                    u_email: email
                }
            }).then(user => {
                if(user){
                    return done(null, false, {
                        message: 'That email is already taken'
                    });
                } else{
                    var userPassword = generateHash(password);
                    var data = 
                        {
                            u_email: email,
                            u_name: req.body.name,
                            u_hashedPwd: userPassword,
                            is_admin: 0,
                            u_signedUp: new Date()
                        };
             
                    User.create(data).then(function(newUser, created) {
                        if (!newUser) {
                            return done(null, false);
                        }
                        if (newUser) {
                            return done(null, newUser);
                        }
                    });
                }
            }).catch((err) => {
                console.log("Error: " + err);
                return done(null, {
                    message: "Error occurred in Local Register Strategy"
                })
            });
        }
    ));

    //LOCAL LOGIN STRATEGY
    passport.use('localLogin', new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        }, (req, email, password, done) => {
            if(!req.body.email || !req.body.password){
                return done(null, {
                    message: "Form fields are empty"
                })
            }
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
                else if(bCrypt.compareSync(password, user.u_hashedPwd) == false){
                    return done(null, {
                        message: "Incorrect Password"
                    })
                }
                else{
                    return done(null, user);
                }
            }).catch((err) => {
                console.log("Error: " + err);
                return done(null, {
                    message: "Error occurred in Local Login Strategy"
                })
            });
        }
    ))
}