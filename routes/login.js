var express = require('express');
var router = express.Router();

var loginController = require('../controllers/login');

/* GET users listing. */
router.post('/', loginController.userLogin);

module.exports = router;
