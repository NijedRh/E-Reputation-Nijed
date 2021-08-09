var express = require('express');
var router = express.Router();
const dbase = require("../models");
const User = dbase.user;
var jwt = require('jsonwebtoken');
const db = require('../config/database');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
var bcrypt = require('bcrypt');
const config = require("../config/database.js");
const user = require('../models/user');
const bank = require('../models/bank');
const Bank = dbase.bank;
require("dotenv").config();



router.post('/register',  function(req,res,next){
  
  User.create({
    username: req.body.username,
    email: req.body.email,
    role:req.body.role,
    Bank_Name:req.body.Bank_Name,
    password: bcrypt.hashSync(req.body.password, 8)
  })
    .then(user => {
      res.send({ message: "User was registered successfully!" });

    })
    
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
})

router.post('/login', function (req,res,next){
  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      let passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      //if (!(passwordIsValid && user.role == 'user')) {
        if (!passwordIsValid ) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password And Invalid User!"
        });
      }
      
      let token = jwt.sign({ id: user.id },process.env.secret, {
                expiresIn: 86400 });

      res.status(200).send({
          
          id: user.id,
          username: user.username,
          email: user.email,
          role:user.role,
          Bank_Name:user.Bank_Name,
          accessToken: token
        });

    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
  })






router.get('/username', async(req,res,next) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  })
  .then(user=> {
    if(user){
      console.log("THIS : " + user.username);
    return res.send({'Username':user.username});
    
    }
  })

  .catch(err => {
     return res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving users."
    });
  });

  })

router.get('/getAllbanknames',function(req,res,next){
  User.findAll({
      attributes: ['Bank_Name'],
      group: ['Bank_Name']
    //where:{Bank_Name : [req.body.Bank_Name]}
  })
  .then(Bank_Name => {
  
    console.log("THIS : " + user.Bank_Name);
     return res.send(Bank_Name);
  })
  .catch(err => {
     return res.status(500).send({
      message:
       err.message || "Some error occurred while retrieving banknames."
    });
  });
  })
router.get('/getAllusers',async(req,res) => {
    
  User.findAll()
  .then(data => {
    return res.send(data);
    //console.log( res.send(data));
  })
  .catch(err => {
    return res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving users."
    });
  });
  })
  router.post('/getUserBank',async(req,res)=>{
     User.findOne({
      where: {
        email: req.body.email
      }
    })
    
    .then(user=> {
      if(user){
        console.log("THIS : " + user.Bank_Name);
      return res.send({'Bank_Name':user.Bank_Name});
      
      }
    })
  
    .catch(err => {
       return res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });
    
  })
router.post('/deleteuser',function(req,res,next){
  console.log('hhh');
 console.log(req.body.id);
let id = req.body.id
console.log(id);
    User.findOne({
      where: {
        id: id
      }
    })
    .then(user=> {
      console.log(user);
      if(user){
        email=user.email;
        console.log("sss")
        console.log(user);
        console.log(email);
        console.log("THIS : " + user.username);
        User.destroy({where: {id:user.id}}).then(test =>{
          //return res.send({'result':'user was deleted'}); 
        })
        Bank.destroy({where: {email:email}}).then(test =>{
          return res.send({'result':'user and bank were deleted'}) ;
        })
         


                 
       .catch(err => {
          return res.status(500).send({
           message:
             err.message || "Some error occurred while deleting user."
         });
       });
      
      }
    })
})
 

 
    /*User.findALL( attributes= ["Bank_Name"], )
  .then(data=> {
      
      res.send(data);
      console.log(res.send(data));
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });*/
    
  

  
  

 /*Router.get('/getUid', function (req, res) {
    User.findById(req.body.user, function (err, user) {
        if (User.role == 'admin') {
            res.send(user);
        } else {
            return res.status(400).send({ message: 'User is not Admin' });
        }
      }); 

  });*/

  
// console.log(req.body.email,req.body.password);
//   let promise =  User.findOne({where: {
//   email:req.body.email}}).exec();


//   promise.then(function(doc){
//     if(doc) {
//       if(doc.validPassword(req.body.password))

//       {
//       //if(doc.isValid(req.body.password)){
//       // generate token
//       let token = jwt.sign({username: doc.username}, 'secret', {expiresIn: '3h'});

//       return res.status(200).json(token);
//     }
//       else {
//       return res.status(501).json({message:' Invalid Credentials'});
//       }
//     }
//     else {
//      return res.status(501).json({message:'User email is not registered.'})
//     }
//    });


//   promise.catch(function(err){
//      return res.status(501).json({message:'Some internal error'});
//    })
//   });



/*
var decodedToken='';
function verifyToken(req,res,next){
  let token = req.query.token;

  jwt.verify(token,'secret', function(err, tokendata){
    if(err){
      return res.status(400).json({message:' Unauthorized request'});
    }
    if(tokendata){
      decodedToken = tokendata;
      next();
    }
  })
}*/

module.exports = router;
