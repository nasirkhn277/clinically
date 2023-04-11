const db = require('../connection');
const bodyParser = require('body-parser');
const crypto = require("crypto");
var timestamp = Math.floor(Date.now() / 1000);

exports.clinics = function(req, res, next) {
    var adminID = req.session.user_id;
    var query = 'SELECT T1.ID, T1.Code, T1.Name, T1.Active, T1.DateCreated, T2.Mobile, T2.Location, T2.Address, T3.UserName\
                    FROM cn_clinic T1\
                    LEFT JOIN cn_clinic_details T2 ON T2.ClinicID = T1.ID\
                    LEFT JOIN cn_clinic_user T3 ON (T3.ClinicID = T1.ID AND T3.Active = ? AND T3.RowDeleted = ?)\
                    WHERE T1.AdminID = ?\
                    AND T1.RowDeleted = ?';

      db.query(query, ['1', '0', adminID, '0'], function(error, data){ console.log(data);
        if(error){
            var result = {status : false, message : 'Unable to process request.'};
            res.send(result);
        } else {
          res.render('cliniclist', {
            pageTitle: 'My Clinics',
            result : data
          });
        }
    });
}

exports.addClinic = function(req, res, next) {
    res.render('addclinic');
}

exports.editClinic = function(req, res, next) {
    res.render('editclinic');
}

exports.addClinicDetails = function(req, res, next) {
    const req_body = req.body;
    if (req_body) {
        var days = req.body.day.filter(Boolean);
        var from = req.body.from.filter(Boolean);
        var till = req.body.till.filter(Boolean);
        var facilties = req.body.facility.filter(Boolean).toString();
        var adminID = req.session.user_id;

        const {
            clinic_name,
            location,
            address,
            zipcode,
            map_url,
            mobile,
            email,
            reg_no,
            user_name,
            password,
            status
        } = req_body;

        hash = crypto.pbkdf2Sync(password, 'clinicallyAdminUser', 1000, 64, `sha512`).toString(`hex`);
 
        const clincic = "INSERT INTO cn_clinic (AdminID, Code, Name, Latitude, Longitude, Active, DateCreated, DateEdited) VALUES (?)";
        const clinic_details = "INSERT INTO cn_clinic_details (ClinicID, Mobile, Email, Location, MapLocation, Address, ZipCode, LicenceNumber, Facilties) VALUES (?)";
        const clinic_availabilty = "INSERT INTO cn_clinic_availability (ClinicID, StartTime, EndTime, Days, Active) VALUES ?";
        const clinic_user = "INSERT INTO cn_clinic_user (ClinicID, UserName, Password, CipherPassword, UserType, Name, Designation, OffDuty, Active, DateCreated, DateEdited) VALUES (?)";
        const clinic_user_details = "INSERT INTO cn_clinic_user_details (UserID, Gender, Mobile, Email, Image, Address) VALUES (?);";
        db.beginTransaction(function(err) {

            db.query(clincic, [
                [adminID, timestamp, clinic_name, 0, 0, status, timestamp, timestamp]
            ], function(err, result1) {
                if (err) {
                    return db.rollback(function() {
                        console.log(err);
                        var result = {status : false, message : 'Unable to process request.'};
                        res.send(result);
                    });
                }
                var clinic_id = result1.insertId;

                var data = [];
                days.forEach((element, index) => {
                    data.push([clinic_id, from[index], till[index], element, '1']);
                });

                db.query(clinic_details, [
                    [clinic_id, mobile, email, location, map_url, address, zipcode, reg_no, facilties]
                ], function(err, result2) {
                    if (err) {
                        return db.rollback(function() {
                            console.log(err);
                            var result = {status : false, message : 'Unable to process request.'};
                            res.send(result);
                        });
                    }

                    db.query(clinic_availabilty, [data], function(err, result3) {
                        if (err) {
                            return db.rollback(function() {
                                console.log(err);
                                var result = {status : false, message : 'Unable to process request.'};
                                res.send(result);
                            });
                        }

                        db.query(clinic_user,  [
                          [clinic_id, user_name, password, hash, '0', clinic_name, 'Admin', '0', status, timestamp, timestamp]
                      ], function(err, result4) {
                            if (err) {
                                return db.rollback(function() {
                                    console.log(err);
                                    var result = {status : false, message : 'Unable to process request.'};
                                    res.send(result);
                                });
                            }
                            var user_id = result4.insertId;
                            db.query(clinic_user_details,  [
                              [user_id, '', mobile, email, '', address]
                          ], function(err, result5) {
                                if (err) {
                                    return db.rollback(function() {
                                        console.log(err);
                                        var result = {status : false, message : 'Unable to process request.'};
                                        res.send(result);
                                    });
                                }

                                db.commit(function(err) {
                                    if (err) {
                                        return db.rollback(function() {
                                            console.log(err);
                                            var result = {status : false, message : 'Unable to process request.'};
                                            res.send(result);
                                        });
                                    }
                                    //console.log('Transaction completed successfully!');
                                    var result = {status : true, message : 'Clinic has been created successfully.'};
                                    res.send(result);
                                });
                            });
                        });
                    });
                });
            });
        });
    }
}