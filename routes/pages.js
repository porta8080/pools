var express = require('express');
var router = express.Router();
var bluebird = require('bluebird');

var mongoose = require('../db.js');
var PageModel = require('../models/PageModel')(mongoose);
var PageDAO = require('../dao/PageDAO')(PageModel);
var PagesController = require('../controllers/PagesController')(bluebird.promisifyAll(PageDAO));

router.get('/:slug',PagesController.show.bind(PagesController));

module.exports = router;
