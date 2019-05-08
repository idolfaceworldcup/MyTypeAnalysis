const express = require('express');
const router = express.Router();
//define API and use API
const managerAPI = require('../manager')

router.use('/manager', managerAPI)

module.exports = router;