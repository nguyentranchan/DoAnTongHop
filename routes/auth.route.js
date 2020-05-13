const express = require('express');
const authController =  require('../controllers/auth.controller')
const router = express.Router()
const validate = require('../validation/resiger.validation')

router.get('/',authController.login);
// router.get('/resiger',authController.resiger);
router.post('/',authController.postlogin);
// router.post('/resiger',validate.postResiger,authController.postRes);

module.exports = router;