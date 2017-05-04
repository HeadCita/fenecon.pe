/**
 * Created by joseph on 12/04/17.
 */
"use strict";

const PageController = require('../controllers/page-controller'),
	express = require('express'),
	router = express.Router(),
	nodemailer = require('../services/nodemailer'),
	pc = new PageController();

router
	.get('/', pc.getHome)
	.get('/nosotros', pc.getUs)
	//--COURSES--->
	.get('/cursos/nuevos-ai', pc.getCursoNuevoAi)
	.get('/cursos/recategorizacion', pc.getCursoRecategorizacion)
	.get('/cursos/solo-manejo', pc.getCursoSoloManejo)
	.get('/cursos/manejo-defensivo', pc.getCursoManejoDefensivo)
	.get('/cursos/camioneta', pc.getCursoCamioneta)
	//--CATEGORIES--->
	.get('/categorias/ai', pc.getCategoryAi)
	.get('/categorias/aiia', pc.getCategoryAiia)
	.get('/categorias/aiib', pc.getCategoryAiib)
	.get('/categorias/aiiia', pc.getCategoryAiiia)
	.get('/categorias/aiiib', pc.getCategoryAiiib)
	.get('/categorias/aiiic', pc.getCategoryAiiic)
	.get('/locales', pc.getLocales)
	.get('/contacto', pc.getContacto)
	.get('/galeria', pc.getGaleria)

	.post('/mail', nodemailer)

module.exports = router;