//var CustomerSetupCtrl = require('../controllers/customerSetup.controller');
var userCtrl = require('../controllers/users.controller');
var SkillSetupCtrl = require('../controllers/SkillSetup.controller');
var SkillCatCtrl = require('../controllers/SkillCategory.controller');

module.exports = function (express, app) {

	var router = express.Router();

	router.get('/', function (req, res) {
		res.json("Welcome to the API Home Page");
	})
	
	
	router.post('/api/v1/user/add', userCtrl.save);
	
	router.get('/api/v1/user', userCtrl.get);
	router.get('/api/v1/user/names', userCtrl.getNames);
	router.get('/api/v1/user/phones', userCtrl.getNumbers);
	router.delete('/api/v1/user/del/:id', userCtrl.deleteOne);
	router.get('/api/v1/user/:id', userCtrl.findOne);//findOneByName
	router.get('/api/v1/user/phone/:id', userCtrl.findOneByPhone);//findOneByPhone
	router.get('/api/v1/user/name/:name', userCtrl.findOneByName);
	router.get('/api/v1/user/email/:id', userCtrl.findemail);
	//router.get('/api/v1/user/contact/:id', userCtrl.findcontact);
	router.put('/api/v1/user/update/:id', userCtrl.updater);
	router.post('/api/v1/SkillSetup/add', SkillSetupCtrl.save);
	router.get('/api/v1/SkillSetup', SkillSetupCtrl.get);
	router.get('/api/v1/SkillSetup/:id', SkillSetupCtrl.find);
	router.put('/api/v1/SkillSetup/:id', SkillSetupCtrl.update);
	router.get('/api/v1/SkillSetup/cat/:id', SkillSetupCtrl.findcat);
	router.delete('/api/v1/SkillSetup/del/:id', SkillSetupCtrl.deleteOne);
	
	router.post('/api/v1/skillcat/add', SkillCatCtrl.save);
	router.get('/api/v1/skillcat', SkillCatCtrl.get);
	router.get('/api/v1/skillcat/:id', SkillCatCtrl.find);
	router.put('/api/v1/skillcat/:id', SkillCatCtrl.update);
	router.delete('/api/v1/skillcat/del/:id', SkillCatCtrl.deleteOne);
	

	app.use('/', router);

}