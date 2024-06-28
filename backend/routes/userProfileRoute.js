const express = require('express');
const router = express.Router();
const {getUserProfile} = require('../controller/userProfileController');

router.get('/', getUserProfile);

module.exports = router;
