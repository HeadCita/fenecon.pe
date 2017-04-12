/**
 * Created by joseph on 12/04/17.
 */
"use strict";

const PageController = require('../controllers/page-controller'),
	express = require('express'),
	router = express.Router(),
	pc = new PageController();

router
	.get('/', pc.getHome);

module.exports = router;