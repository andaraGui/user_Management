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

//Retrive and return all users /Retrive and return a single user
exports.find = (req, res) => {
    Userdb.find()
        .then(user => {
            res.send(user)
        })
        .catch(err => {
            res.status(500).send({ message: err.message || 'Error ocurred while retriving user information' })
        })
}

//Update a new identified user by user id
exports.update = (req, res) => {
    if (!req.body) {
        return res
            .status(400)
            .send({ message: "data to update can not be empty" })
    }

    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body)
        .then(data => {
           
            if (!data) {
                res.status(404).send({message: `Cannot Update user with ${id}. Maybe user not found`});
            }else{
                res.send(data);
              
            }
            
        })
        .catch(err =>{
            res.status(500).send({message: 'Error Update user information'});
        })
       
        

}

//delete a user with specified user id in the request
exports.delete = (req, res) => {

}