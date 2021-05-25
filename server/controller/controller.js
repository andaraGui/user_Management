var Userdb = require('../model/model');

//Create and save new user
exports.create = (req, res) => {
    //validate request
    if (!req.body) {
        res.status(400).send({ message: 'Content can not be empty' });
        return;
    }

    //New user
    const user = new Userdb({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    })

    //Save the user in the database
    user
        .save(user)//variable created above with content of body
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Some error ocurred while creating a create operation'
            });
        });
};

//Retrieve and return all users /Retrieve and return a single user
exports.find = (req, res) => {

}

//Update a new identified user by user id
exports.update = (req, res) => {

}

//delete a user with specified user id in the request
exports.delete = (req, res) => {

}