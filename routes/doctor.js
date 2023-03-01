var express = require('express');
var router = express.Router();
var userController = require('../controllers/users');

/* GET users listing. */
router.get('/', userController.doctor);

router.post('/', userController.addDoctor);

module.exports = router;
