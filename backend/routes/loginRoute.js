const express = require('express');
const router = express.Router();
const {handleLogin} = require('../controller/userLoginController');

router.post('/', handleLogin);

module.exports=router;