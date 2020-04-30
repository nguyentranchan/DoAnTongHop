module.exports.index = function(req,res){
    res.render('admin/in');
}
module.exports.logout = function(req,res){
    res.clearCookie('userEmail')
	res.redirect('/auth');
}