var express = require('express');
var router = express.Router();

var db = require('../db.js');
var PoolModel = require('../models/PoolModel')(db);
// console.log(PoolModel);
var PoolsController = require('../controllers/PoolsController')(PoolModel);
// console.log(PoolsController);
//
//
router.get('/',PoolsController.index.bind(PoolsController));

module.exports = router;
