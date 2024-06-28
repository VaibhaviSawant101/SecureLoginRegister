const express = require('express');
const router = express.Router();
const {handleNewUser} = require('../controller/userRegisterController');

router.post('/', handleNewUser);

module.exports=router;