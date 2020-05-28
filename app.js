const   express = require("express"),
        bodyParser = require("body-parser"),
        mongoose = require("mongoose"),
        passport = require('passport'),
        passportLocal = require('passport-local'),
        passportLocalMongoose = require('passport-local-mongoose'),
        User = require('./model/user'),
        board = require('./model/homeDB'),
        css224DB = require('./model/CSS224DB'),
        indexRoutes = require('./routes/index'),
        groupRoutes = require('./routes/group'),
        seedDB = require('./seeds');
let app = express()
/*-----------------------------------------------------------------------------------------------*/
mongoose.connect('mongodb://localhost:27017/dinsor', {useNewUrlParser: true});
/*-----------------------------------------------------------------------------------------------*/
app.use(express.static("public"))
app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({ extended: true }))
app.use(require('express-session')({
    secret: 'CSS227',
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
passport.use(new passportLocal(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())
app.use('/', indexRoutes);
app.use('/dinsor', groupRoutes)
seedDB()
/*-----------------------------------------------------------------------------------------------*/
app.use(function(req,res,next){
    res.locals.currentUser = req.user;
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
app.listen(3000, function (req, res) {
    console.log("Server is ready")
})
