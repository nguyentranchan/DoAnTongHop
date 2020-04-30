const express = require('express');
const router  = express.Router()
const adminController = require("../controllers/admin.controller")

router.get('/',adminController.index);
router.get('/logout',adminController.logout);


module.exports = router;