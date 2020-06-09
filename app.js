const   express = require("express"),
        bodyParser = require("body-parser"),
        mongoose = require("mongoose"),
        passport = require('passport'),
        passportLocal = require('passport-local'),
        passportLocalMongoose = require('passport-local-mongoose'),
        path = require('path'),
        flash = require('connect-flash'),
        User = require('./model/user'),
        board = require('./model/homeDB'),
        indexRoutes = require('./routes/index'),
        groupRoutes = require('./routes/group'),
        seedDB = require('./seeds');
const   css224DB = require('./model/CSS224DB'),
        css226DB = require('./model/CSS226DB'),
        css227DB = require('./model/CSS227DB'),
        css228DB = require('./model/CSS228DB'),
        gen241DB = require('./model/GEN241DB'),
        lng224DB = require('./model/LNG224DB');
let app = express()
/*-----------------------------------------------------------------------------------------------*/
mongoose.connect('mongodb://localhost:27017/dinsor', {useNewUrlParser: true});
/*-----------------------------------------------------------------------------------------------*/
app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({ extended: true }))
app.use(require('express-session')({
    secret: 'CSS227',
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())
passport.use(new passportLocal(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())
seedDB()

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
app.listen(3000, function (req, res) {
    console.log("Server is ready")
})