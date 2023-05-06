const express = require('express');
const router = express.Router();
const posttabCtrl = require('../controllers/posttabController');


router.get('/posttablero', posttabCtrl.findAll);
router.get('/posttablero/last', posttabCtrl.getLast);
router.post('/posttablero/create', posttabCtrl.create);
router.get('/posttablero/:id', posttabCtrl.findById);


module.exports = router;