const   express = require("express"),
        bodyParser = require("body-parser"),
        mongoose = require("mongoose"),
        passport = require('passport'),
        passportLocal = require('passport-local'),
        passportLocalMongoose = require('passport-local-mongoose'),
        User = require('./model/user');
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
/*-----------------------------------------------------------------------------------------------*/
let dinsorSchema = new mongoose.Schema({
    title: String
})
let home = mongoose.model("home",dinsorSchema);
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
app.get("/", function (req, res) {
    res.render("landing")
})
/*-------------------------------------------*/
app.get("/Index", function (req, res) {
    home.find({},function(error, allhome){
        if(error){
            console.log("Error!");
        }
        else{
            res.render("home",{home:allhome});
        }
    })
})
app.post("/Index", function (req, res) {
    let n_input = req.body.text
    let n_text = { title: n_input }
    home.create(n_text, function(error,newText){
        if(error){
            console.log("Error!")
        }
        else{
            console.log("New Text Add")
            res.redirect("/home")
        }
    })
})
/*-------------------------------------------*/
app.get("/login", function (req, res) {
    res.render("login")
})
app.post("/login", passport.authenticate('local',{
    successRedirect: '/Index',
    failureRedirect: 'login'
}),function (req, res) {
    
})

app.get("/logout", function (req, res) {
    res.logout()
    res.redirect("/")
})
/*-------------------------------------------*/
app.get("/register", function (req, res) {
    res.render("register")
})
app.post("/register", function(req, res){
    User.register(new User({username: req.body.username}), req.body.password,function(error, user){
        if(error){
            console.log(error);
            return res.render('register')
        }
        passport.authenticate('local')(req,res,function(){
            res.redirect('/Index')
        })
    })
})
//app.get("")
/*-----------------------------------------------------------------------------------------------*/
app.get("/CSS_224", function (req, res) {
    res.render("CSS_224")
})
/*-------------------------------------------*/
app.get("/CSS_226", function (req, res) {
    res.render("CSS_226")
})
/*-------------------------------------------*/
app.get("/CSS_227", function (req, res) {
    res.render("CSS_227")
})
/*-------------------------------------------*/
app.get("/CSS_228", function (req, res) {
    res.render("CSS_228")
})
/*-------------------------------------------*/
app.get("/LNG_224", function (req, res) {
    res.render("LNG_224")
})
/*-------------------------------------------*/
app.get("/GEN_241", function (req, res) {
    res.render("GEN_241")
})
/*-------------------------------------------*/
app.get("/edit", function (req, res) {
    res.render("edit")
})
/*-----------------------------------------------------------------------------------------------*/
function isLoggedin(req, res, next){
    if(req.isAuthenticated()){
        return next()
    }
}
/*-----------------------------------------------------------------------------------------------*/
app.listen(3000, function (req, res) {
    console.log("Server is ready")
})
