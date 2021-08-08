var express = require('express');
var router = express.Router();
const dbase = require("../models");
const Admin = dbase.admin;
var jwt = require('jsonwebtoken');
const db = require('../config/database');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
var bcrypt = require('bcrypt');
const config = require("../config/database.js");
const admin = require('../models/admin');

require("dotenv").config();




/*router.post('/register',  function(req,res,next){
  
  Admin.create({
    username: req.body.username,
    email: req.body.email,
    role:req.body.role,
    password: bcrypt.hashSync(req.body.password, 8)
  })
    .then(user => {
      res.send({ message: "Admin was registered successfully!" });

    })
    
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
})
*/
router.post('/adminlog', function (req,res,next){
  Admin.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(admin => {
      if (!admin) {
        return res.status(404).send({ message: "Admin Not found." });
      }
      
      let passwordIsValid = bcrypt.compareSync(
        req.body.password,
        admin.password
      );

      //if (!(passwordIsValid && admin.role == 'admin')) {
        if (!passwordIsValid ) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password And Invalid Admin"
        });
      }
      
      let token = jwt.sign({ id: admin.id }, process.env.secret, {
                expiresIn: 86400 });

      res.status(200).send({
          
          id: admin.id,
          username: admin.username,
          email: admin.email,
          //role:admin.role,
          accessToken: token
        });

    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
  })

 /*app.get('/getUid', function (req, res) {
    Admin.findById(req.body.admin, function (err, admin) {
        if (Admin.role == 'admin') {
            res.send(admin);
        } else {
            return res.status(400).send({ message: 'User is not Admin' });
        }
      }); 

  });*/




  module.exports = router; 