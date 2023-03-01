var db = require('../connection');
var timestamp = Math.floor(Date.now()/1000);

exports.userList = function(req, res, next) {
    var query = 'SELECT * FROM cn_doctors WHERE Active = ? AND RowDeleted = ?';
      db.query(query, ['1', '0'], function(error, data){
        if(error){
          res.redirect('/static_error');
        } else {
          res.render('user', {
            pageTitle: 'Dashboard',
            result : data
          });
        }
      });
  }

exports.doctor = function(req, res, next) {
    res.render('doctor', {
        pageTitle: 'Add Doctor'
      });
}

exports.addDoctor = function(req, res, next){
    const req_body = req.body;
    if(req_body){
      const {doctor_name, username, password, mobile, specility, degree, fee} = req_body;
  
      var query = "INSERT INTO cn_doctors (UserName, Password, Name, Speciality, Degree, Mobile, Fee, DateCreated) VALUES (?) ";
      db.query(query, [[username, password, doctor_name, specility, degree,  mobile, fee, timestamp]], function(error, data){
      if(error){
        console.log(timestamp);
        res.render('static_error', {
          pageTile : 'error',
          message : 'Something Went Wrong'
        });
      } else {
       res.redirect('/users');
      }
     });
  
    }
}