require('dotenv').config();

var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path')
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
//
//connet mongodb 
var app = express();
var port = 3000;

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }, err => {
   if (err) throw err;
   console.log('Connect Database successfullyy!!');
 });
 app.listen(port,function(){
	console.log('Server listening on port 3000');
});
//cau hinh 
app.set('view engine','pug');
app.set('views','./views');
app.set('view engine','pug');
app.set('views','./views');
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static('public'));
app.use(cookieParser(process.env.SESSION_SECRECT));
app.use(session({secret:'mysuppersecret',
resave: false,
 saveUninitialized: false,
 store: new MongoStore({ mongooseConnection: mongoose.connection}),
 cookie: {maxAge: 180 *60 *1000}
}));
app.use(function(req,res,next){
   res.locals.session = req.session;
   next();
})
mongoose.set('useFindAndModify', false);

//requide file
const adminRouter = require('./routes/admin.route')
const authRouter = require('./routes/auth.route');
const authMiddleware = require('./middleware/auth.middleware');
//route

app.use('/admin',authMiddleware.requireAuth,adminRouter);
app.use('/auth',authRouter);



