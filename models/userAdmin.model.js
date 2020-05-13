var mongoose = require('mongoose');

var userAdminSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    password: String,
    avatar: {
        type: String,
        default: ""
    },
    email:{
        type:String
    },
    phone:{
        type:String,
        default: ""
    },
    address: {
        type:String,
        default: ""
    },
    status: {
        type:String,
        default: "Pending"
    },
    create_time : {
        type : Date, default: Date.now},
    update_time : {
        type : Date, default: Date.now},

})
var User = mongoose.model('User',userAdminSchema,'userAdmin');

module.exports = User;
