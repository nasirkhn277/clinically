var express = require('express');
var router = express.Router();
var clinicsController = require('../controllers/clinics');

/* GET users listing. */
router.get('/', clinicsController.clinics);

//router.post('/', userController.addDoctor);

module.exports = router;
