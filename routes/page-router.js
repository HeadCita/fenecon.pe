/**
 * Created by joseph on 12/04/17.
 */
"use strict";

const express = require('express'),
	router = express.Router();

router
	.get('/', (req, res, next)=>{
		res.render('home');
	});
module.exports = router;