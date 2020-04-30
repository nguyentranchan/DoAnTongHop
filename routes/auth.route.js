const express = require('express');
const authController =  require('../controllers/auth.controller')
const router = express.Router()

router.get('/',authController.login);
router.get('/resiger',authController.resiger);
router.post('/',authController.postlogin);

module.exports = router;