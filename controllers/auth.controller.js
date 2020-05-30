var User = require('../models/userAdmin.model')
var md5 = require('md5')

module.exports.login = function (req,res){
    if(req.signedCookies.userEmail){
        res.redirect('/admin');
    }else
        res.render('admin/login');
}

module.exports.postlogin = async function (req, res, next){
    const email = req.body.email
    const password = req.body.password 
    var haspassword = md5(password)
    var user = await User.findOne({email: email})
	if(!user){
		res.render('admin/login',{
			errors : ['User does not exit.']
		});
		return
	}else{
        if (user.password !== haspassword) {
            // statement
            res.render('admin/login',{
                errors : ['Password not true.']
            })
            return
        }else{
            res.cookie('userEmail',user.email,{signed: true});
            res.redirect('/admin')
        }       
    }
    next()
}

module.exports.resiger = function(req, res) {
    if(req.signedCookies.userEmail){
        res.redirect('/admin')
    }else
        res.render('admin/resiger')
}

module.exports.postRes = async function( req, res) {
    req.body.password = md5(req.body.password)
    const user = await User.insertMany(req.body)
    res.redirect('/auth')
}



