const User = require('../models/userAdmin.model')


module.exports.index = async function(req,res){
    const user = await User.findOne({email: req.signedCookies.userEmail})
    const username = user.name ;
    res.render('admin/in',{ username: username});
}
module.exports.logout = function(req,res){
    res.clearCookie('userEmail')
	res.redirect('/auth');
}