const   express = require('express'),
        router = express.Router(),
        passport = require('passport'),
        User = require('../model/user'),
        board = require('../model/homeDB'),
        css224DB = require('../model/CSS224DB'),
        middleware = require('../middleware');

router.use(function(req,res,next){
    res.locals.currentUser = req.user;
    next();
})

router.get("/", function (req, res) {
    res.render("landing")
})
/*-------------------------------------------*/
router.get("/login", function (req, res) {
    res.render("login")
})

router.post("/login", passport.authenticate('local',{
    successRedirect: '/dinsor',
    failureRedirect: '/login'
    }),function (req, res) {  
})

router.get("/logout", function (req, res) {
    req.logout()
    req.flash('success','You log out success')
    res.redirect("/dinsor")
})
/*-------------------------------------------*/
router.get("/register", function (req, res) {
    res.render("register")
})
router.post("/register", function(req, res){
    if(req.body.password != req.body.c_password){
        console.log("confirm password error")
        return res.render('register')
    }
    User.register(new User({username: req.body.username}), req.body.password,function(error, user){
        if(error){
            console.log(error);
            return res.render('register')
        }
        
        passport.authenticate('local')(req,res,function(){
            req.flash('success','Welcome to our team'+user.username)
            res.redirect('/dinsor')
        })
    })
})
/*-------------------------------------------*/
router.get("/edit",middleware.isLoggedin ,function (req, res) {
    res.render("edit")
})


module.exports = router;