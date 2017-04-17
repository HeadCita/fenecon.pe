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
}

module.exports = PageController;