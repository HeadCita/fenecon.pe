/**
 * Created by joseph on 12/04/17.
 */
"use strict";

const PageController = require('../controllers/page-controller'),
	express = require('express'),
	router = express.Router(),
	pc = new PageController();

router
	.get('/', pc.getHome)
	.get('/nosotros', pc.getUs)
	.get('/cursos/nuevos-ai', pc.getCursoNuevoAi)
	.get('/cursos/recategorizacion', pc.getCursoRecategorizacion)
	.get('/cursos/solo-manejo', pc.getCursoSoloManejo)
	.get('/cursos/manejo-defensivo', pc.getCursoManejoDefensivo)
	.get('/cursos/camioneta', pc.getCursoCamioneta)
	.get('/locales', pc.getLocales)
	.get('/contacto', pc.getContacto);

module.exports = router;