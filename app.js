const   express = require("express"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    passport = require('passport'),
    passportLocal = require('passport-local'),
    passportLocalMongoose = require('passport-local-mongoose'),
    path = require('path'),
    flash = require('connect-flash'),
    indexRoutes = require('./routes/index'),
    groupRoutes = require('./routes/group'),
    methodOverride = require('method-override'),
    commentRoutes = require('./routes/comment');
    seedDB = require('./seeds'),
    port = process.env.PORT ||3000;
const   user = require('./model/user'),
    subject = require('./model/subject'),
    post = require('./model/post'),
    comment = require('./model/comment');
var favicon = require('serve-favicon');
let app = express()
/*-----------------------------------------------------------------------------------------------*/
mongoose.connect('mongodb://localhost:27017/dinsor', {useNewUrlParser: true,  useUnifiedTopology: true });
/*-----------------------------------------------------------------------------------------------*/
app.use(favicon(__dirname + '/public/images/favicon.ico'));
app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({ extended: true }))
app.use(require('express-session')({
    secret: 'NoOneKnow',
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())
app.use(methodOverride("_method"))
passport.use(new passportLocal(user.authenticate()))
passport.serializeUser(user.serializeUser())
passport.deserializeUser(user.deserializeUser())
mongoose.set('useFindAndModify', false);
// seedDB()

/*-----------------------------------------------------------------------------------------------*/
app.use(function(req,res,next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash('error');
    res.locals.success = req.flash('success');
    next();
})
/*-----------------------------------------------------------------------------------------------*/
// let dinsorSchema = new mongoose.Schema({
//     title: String
// })
// let home = mongoose.model("home",dinsorSchema);
/*-----------------------------------------------------------------------------------------------*/
// home.create({
//     title: "First of test"
//     },
//     function(error, home){
//         if(error){
//             console.log("Error!");
//         }
//         else{
//             console.log("Added!!");
//             console.log(home);
//         }
//     }
// )
/*-----------------------------------------------------------------------------------------------*/
app.use('/', indexRoutes);
app.use('/dinsor', groupRoutes)
app.use('/dinsor/:id/comment',commentRoutes)
app.listen(3000, function (req, res) {
    console.log("Server is ready")
})