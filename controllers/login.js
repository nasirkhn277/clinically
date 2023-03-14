
var db = require('../connection');
var userController = require('../models/login');
var timestamp = Math.floor(Date.now()/1000);
const crypto = require("crypto");

exports.userLogin = function(req, res, next) {
    const {user_type, username, password} = req.body;
    
    if(username && password){
      hash = crypto.pbkdf2Sync(password, 'clinicallyAdminUser', 1000, 64, `sha512`).toString(`hex`);
      console.log({user_type, username, password, hash})
      if(user_type == '3'){
        var query = 'SELECT * FROM cn_admin WHERE Mobile = ? AND HashPassword = ? AND Active = ? AND RowDeleted = ?';
      } else {
        var query = 'SELECT * FROM user_login WHERE UserName = ? AND Password = ?';
      }
      db.query(query, [username, hash, '1', '0'], function(error, data){ console.log(data);
        if(data.length > 0){
          var result = {status : true, message : 'Admin logined successfully.'};
          res.send(result);
        } else {
          var result = {status : false, message : 'Username or password is incorrect.'};
          res.send(result);
        }
      });
    } else {
      var result = {status : false, message : 'Please enter username & password.'};
       res.send(result);
    }
  }

  exports.userSignup = function(req, res, next) {

    const req_data = req.body;

    const {user_name, email, mobile, pass} = req_data;
    
    hash = crypto.pbkdf2Sync(pass, 'clinicallyAdminUser', 1000, 64, `sha512`).toString(`hex`);

    if(req_data){
      var query = "INSERT INTO cn_admin (Name, Mobile, Password, HashPassword,  Email, DateCreated, DateEdited) VALUES (?) ";
      db.query(query, [[user_name, mobile, pass, hash, email, timestamp, timestamp]], function(error, data){
      if(error){
       // console.log(error);
       var result = {status : false, message : 'Some Problem with input data'};
       res.send(result);
      } else {
        var result = {status : true, message : 'Admin Signed up successfully'};
        res.send(result);
      }
     });
    }
  }

 exports.signup =  function(req, res, next) {
    res.render('signup', {
      pageTile : 'Sign Up'
    });
  }