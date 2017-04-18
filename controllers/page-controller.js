/**
 * Created by joseph on 12/04/17.
 */
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
	getLocales(req, res, next){
		res.render('locales');
	}

	getContacto(req, res, next){
		res.render('contacto');
	}
}

module.exports = PageController;