/**
 * Created by joseph on 12/04/17.
 */
const express = require('express'), //framework
	routes = require('./routes/page-router'), //router app
	publicDir = express.static(`${__dirname}/public`), //public folder
	viewDir = `${__dirname}/views`,  //views folder
	port = (process.env.PORT || 3001); //port (http://IP:port)

let app = express(); //instance of app Express;

app
	.set('views', viewDir)
	.set('view engine', 'pug')
	.set('port', port)
	.use(publicDir)
	.use(routes);

module.exports = app;

