
var db = require('../connection');
var userController = require('../models/login');

exports.userLogin = function(req, res, next) {
    const {username, password} = req.body;
    if(username && password){
      var query = 'SELECT * FROM user_login WHERE UserName = ? AND Password = ?';
      db.query(query, [username, password], function(error, data){
        if(data.length > 0){
          res.redirect('/users');
        } else {
          res.redirect('/');
        }
      });
    } else {
      res.redirect('/');
    }
    
  }

  exports.userSignup = function(req, res, next) {

    const req_data = req.body;
    const {username, password, clinic_name, clinic_mobile, zip_code, address} = req_data;
  
    if(req_data){
      var query = "INSERT INTO user_login (UserName, Password, Name, Mobile,  ZipCode, Address) VALUES (?) ";
      db.query(query, [[username, password, clinic_name, clinic_mobile, zip_code, address]], function(error, data){
      if(error){
        console.log('something went wrong');
        res.render('static_error', {
          pageTile : 'error',
          message : 'Something Went Wrong'
        });
      } else {
        res.render('index', {
          pageTile : 'Login'
        });
      }
     });
    }
  }

 exports.signup =  function(req, res, next) {
    res.render('signup', {
      pageTile : 'Sign Up'
    });
  }