var express = require('express');
var router = express.Router();
var loginController = require('../controllers/login');

router.get('/', loginController.signup);
router.post('/', loginController.userSignup);

module.exports = router;
