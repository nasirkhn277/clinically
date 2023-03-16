var express = require('express');
var router = express.Router();
var clinicsController = require('../controllers/clinics');

/* GET users listing. */
router.get('/', clinicsController.clinics);

router.get('/addclinic', clinicsController.addClinic);

router.post('/addclinic', clinicsController.addClinicDetails);

module.exports = router;
