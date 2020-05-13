var validator = require('validator');

module.exports.postResiger = function(req,res,next) {

    let errors = [];
    //name
    if(req.body.name == ""){
        errors.push('Name not null')
    }else {
        if(!validator.isAlpha(req.body.name)){
            errors.push("Name is n't valid");
        }else {
            if(req.body.name.length <= 6) {
                errors.push('Name is short')
            }
        }
    }
    
    //email
    if(req.body.email == ""){
        errors.push('email not null')
    }else {
        if(!validator.isEmail(req.body.email)){
            errors.push("Email is n't valid");
        }
    }
    //pass
    if(req.body.password == ""){
        errors.push('Password not null')
    }else{
        if(req.body.password.length <= 6){
            errors.push('Password is short')
        }
    }
    if(errors.length){
        let errs = errors.join()
		res.render('admin/resiger',{
            errors: errs
            
		});
		return;
	}
	next();
}