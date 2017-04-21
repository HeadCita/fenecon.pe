/**
 * Created by joseph on 12/04/17.
 */
"use strict";
class PageController{
	getHome(req, res, next){
		res.render('home');
	}
	getUs(req, res, next){
		res.render('nosotros');
	}
	//----COURSES-->
	getCursoNuevoAi(req, res, next){
		res.render('cursos/nuevos-ai');
	}
	getCursoRecategorizacion(req, res, next){
		res.render('cursos/recategorizacion');
	}
	getCursoSoloManejo(req, res, next){
		res.render('cursos/solo-manejo');
	}
	getCursoManejoDefensivo(req, res, next){
		res.render('cursos/manejo-defensivo');
	}
	getCursoCamioneta(req, res, next){
		res.render('cursos/camioneta');
	}
	//----CATEGORIES-->
	getCategoryAi(req, res, next){
		res.render('categories/ai');
	}
	getCategoryAiia(req, res, next){
		res.render('categories/aiia');
	}
	getCategoryAiib(req, res, next){
		res.render('categories/aiib');
	}
	getCategoryAiiia(req, res, next){
		res.render('categories/aiiia');
	}
	getCategoryAiiib(req, res, next){
		res.render('categories/aiiib');
	}
	getCategoryAiiic(req, res, next){
		res.render('categories/aiiic');
	}
	getLocales(req, res, next){
		res.render('locales');
	}

	getContacto(req, res, next){
		res.render('contacto');
	}
}

module.exports = PageController;