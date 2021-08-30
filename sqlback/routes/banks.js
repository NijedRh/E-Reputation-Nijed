var express = require('express');
var router = express.Router();
const dbase = require("../models");
const Bank = dbase.bank;
var jwt = require('jsonwebtoken');
const db = require('../config/database');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
var bcrypt = require('bcrypt');
const config = require("../config/database.js");
const bank = require('../models/bank');
var cookieParser = require('cookie-parser');

router.post('/add',function(req,res,next){
  //console.log(req.body)
  //console.info(req);
    Bank.create({
   
    Bank_Name: req.body.Bank_Name,
    email: req.body.email,
    city: req.body.city,
    country: req.body.country,
    Address: req.body.Address,
    imageUpload: req.body.imageUpload,
    URL: req.body.URL
    })
    .then(bank => {
      console.log(bank);
        res.send({ message: "Bank was registered successfully!"});
  
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });

})


router.get('/getAllbanks',function(req,res,next){
  Bank.findAll()
.then(data => {
  res.send(data);
})
.catch(err => {
  res.status(500).send({
    message:
      err.message || "Some error occurred while retrieving tutorials."
  });
});
})




router.post('/addbanka',function(req,res,next){
  //console.log(req.body)
  //console.info(req);
    Bank.create({
    Branche:req.body.Branche,
    Bank_Name: req.body.Bank_Name,
    email: req.body.email,
    city: req.body.city,
    country: req.body.country,
    Address: req.body.Address,
    imageUpload: req.body.imageUpload,
    URL: req.body.URL
    })
    .then(bank => {
      console.log(bank);
        res.send({ message: "Bank was registered successfully!"});
  
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });

})
router.post('/getAlluserbanks',function(req,res,next){
  Bank.findAll({
    where: {
      email: req.body.email},
      attributes: ['Branche','URL','Address','city','country'],
      group: ['Branche','URL','Address','city','country']
    
  })
  .then(data => {
     console.log(data);
    //console.log("THIS : " + user.Bank_Name);
    // return res.send({'Bank_Name':bank.Bank_Name},{'URL':bank.URL},{'Address':bank.Address},{'URL':bank.URL});
    return res.send(data);
    
     
  })
  .catch(err => {
     return res.status(500).send({
      message:
       err.message || "Some error occurred while retrieving banknames."
    });
  });
  })




  router.post('/getAlldetails',function(req,res,next){
    Bank.findAll({
      where: {
        email: req.body.email},
        attributes: ['Bank_Name','Branche','URL','Address','city','country'],
        group: ['Bank_Name','Branche','URL','Address','city','country']
      
    })
   
   .then(data=> {
    
       //console.log("THIS : " + user.Bank_Name);
     return res.send(data);
     
     
   })
 
   .catch(err => {
      return res.status(500).send({
       message:
         err.message || "Some error occurred while retrieving users."
     });
   });
   
 })

 router.post('/getBankImage',function(req,res,next){
  Bank.findAll({
      attributes: ['imageUpload'],
      group: ['imageUpload'],
      where:{Bank_Name : [req.body.Bank_Name]}
  })
  .then(imageUpload => {
  
    console.log("THIS : " + bank.imageUpload);
     return res.send(imageUpload);
  })
  .catch(err => {
     return res.status(500).send({
      message:
       err.message || "Some error occurred while retrieving banknames."
    });
  });
  })





module.exports = router;