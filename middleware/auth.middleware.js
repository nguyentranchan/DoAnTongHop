var User = require('../models/userAdmin.model')

module.exports.requireAuth = async function(req,res,next){
	if(!req.signedCookies.userEmail)
	{
		res.redirect('/auth');
		return;
	}
	var user = await User.findOne({email: req.signedCookies.userEmail});
	if (!user) {
		// statement
		res.redirect('/auth');
		return;	
	}
	res.locals.user = user;
	next();
}

