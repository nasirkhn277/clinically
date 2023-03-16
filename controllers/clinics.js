var db = require('../connection');
var timestamp = Math.floor(Date.now()/1000);

exports.clinics = function(req, res, next) {
  res.render('cliniclist');
}

exports.addClinic = function(req, res, next) {
    res.render('addclinic');
}

exports.addClinicDetails = function(req, res, next){
    const req_body = req.body;
    console.log(req_body);
    res.send(req_body);
    // if(req_body){
    //   const {doctor_name, username, password, mobile, specility, degree, fee} = req_body;
  
    //   var query = "INSERT INTO cn_doctors (UserName, Password, Name, Speciality, Degree, Mobile, Fee, DateCreated) VALUES (?) ";
    //   db.query(query, [[username, password, doctor_name, specility, degree,  mobile, fee, timestamp]], function(error, data){
    //   if(error){
    //     console.log(timestamp);
    //     res.render('static_error', {
    //       pageTile : 'error',
    //       message : 'Something Went Wrong'
    //     });
    //   } else {
    //    res.redirect('/users');
    //   }
    //  });
  
    // }
}