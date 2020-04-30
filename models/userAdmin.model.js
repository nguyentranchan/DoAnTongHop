var mongoose = require('mongoose');

var userAdminSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    password: String,
    avatar: String,
    email: String,
    phone:String,
    address: String,
    status: Boolean,
    create_time : {
        type : Date, default: Date.now},
    update_time : {
        type : Date, default: Date.now},

})
var User = mongoose.model('User',userAdminSchema,'userAdmin');

module.exports = User;
