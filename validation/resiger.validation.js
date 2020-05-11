var validator = require('validator');

module.exports.postResiger = function(req,res,next) {

    let errors = []
    if(req.body.name.length <= 6) {
        errors.push('Name is short')
    }
    if(!validator.isAlpha(req.body.name.length)){
        errors.push("Name is n't valid");
    }
    if(!validator.isEmail(req.body.email)){
        errors.push("Email is n't valid");
    }
    if(req.body.name == ""){
        errors.push('Name not null')
    }
    if(req.body.password == ""){
        errors.push('Password not null')
    }
    if(req.body.email == ""){
        errors.push('email not null')
    }
    if(req.body.password.length <= 6){
        errors.push('Password is short')
    }
    if(errors.length){
		res.render('admin/resiger',{
			errors: errors,
			values: req.body
		});
		return;
	}
	next();
}