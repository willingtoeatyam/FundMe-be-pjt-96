const express = require('express');
const router = express.Router();

const controller = require('../controllers/donorControllers');

router.post('/signup/donor', controller.registerNewDonor)

module.exports = router;