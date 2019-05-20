module.exports = function(app){
    const users = require('../controller/user.controller.js');

    //create new user
    app.post('/', users.create);

    //retrieve all users
    app.get('/', users.findAll);

    //retrieve user by id
    app.get('/:userId', users.findById);

    //retrieve user by username
    app.get('/:userUsername', users.findByUsername);

    //update user with id
    app.put('/:userId', users.update);

    //delete user with id
    app.delete('/:userId', users.delete);
}