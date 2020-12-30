const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = express.Router();
const app = express();
const PORT = 4000;
// DB Config
let User = require('./users.model');

// Middlwares
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json())
app.use(cors());
app.use('/users', userRoutes);

// connect to Mongo
mongoose.connect('mongodb://localhost:27017/users', {useNewUrlParser: true, useUnifiedTopology: true});
const connection = mongoose.connection;


connection.once('open', function(){
    console.log('MongoDB database connection established successfully');
})


// userRoutes.get('/:id', (req, res) => {
//     User.findById(req.params.id, function(err, user){
//         if(err){
//             console.log(err)
//         }else{
//             res.json(user)
//         }
//     })
// })



// @route  GET api/users
// @description Get all users
userRoutes.get('/', (req, res) => {
    User.find()
        .then(users => res.json(users))
})

// @route  POST api/users
// @description Create a user
userRoutes.post('/add', (req, res) => {
    const newUser = new User(req.body)
     newUser.save().then(user => res.json(user));
})

// @route  POST api/login
// @description login a user/admin
userRoutes.post('/login', async (req, res) => {
    await User.findOne(req.body, (err, data) => {
      if(data) {
          res.send(data)
      } else {
          res.send('Not FOUND')
      }
    })
})

// @route Post api/users/:findById
// @description Update a user
userRoutes.post('/update/:id', (req, res) => {
    User.findById(req.params.id, (err, user) => {
        if (!user){
            res.status(404).send("data is not found");
        }
        else{
            user.userId = req.body.userId;
            user.userFirstName = req.body.userFirstName;
            user.userLastName = req.body.userLastName;
            user.userPassword = req.body.userPassword;
            user.userRole = req.body.userRole;
            user.save().then(user => {
                res.json(user);
            })
        }           
    })
    .catch(err => {
        res.status(400).send("Update not possible");
    });
});

// @route  DELETE api/users/:id
// @description Delete a user
userRoutes.delete('/delete/:id',async (req, res) => {
    await User.deleteOne({_id:req.params.id})
    res.send('deleted')
})

app.listen(PORT, function(){
    console.log("Server is running on port " + PORT);
})