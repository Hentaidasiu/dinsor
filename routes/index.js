const   express = require('express'),
        router = express.Router(),
        passport = require('passport'),
        middleware = require('../middleware');
const   user = require('../model/user'),
        subject = require('../model/subject'),
        post = require('../model/post'),
        comment = require('../model/comment');
// router.use(function(req,res,next){
//     res.locals.currentUser = req.user;
//     next();
// })

router.get("/", function (req, res) {
    res.render("landing")
})
/*-------------------------------------------*/
router.get("/login", function (req, res) {
    res.render("login")
})

router.post("/login", passport.authenticate('local',{
    successRedirect: '/dinsor',
    successFlash: 'Welcome!',
    failureRedirect: '/login',
    failureFlash:  true
    }))

router.get("/logout", function (req, res) {
    req.logout()
    req.flash('success','You log out success')
    console.log("log out success")
    res.redirect("/dinsor")
})
/*-------------------------------------------*/
router.get("/register", function (req, res) {
    res.render("register")
})
router.post("/register", function(req, res){
    console.log(req.body)
    if(req.body.password != req.body.c_password){
        console.log("confirm password error")
        return res.render('register')
    }
    user.register(new user({username: req.body.username}), req.body.password,function(error, user){
        if(error){
            console.log(error);
            return res.render('register')
        }
        
        passport.authenticate('local')(req,res,function(){
            req.flash('success','Welcome to our team :'+ user.username)
            res.redirect('/dinsor')
        })
    })
})
/*-------------------------------------------*/
router.get("/editprofile",middleware.isLoggedin ,function (req, res) {
    res.render("editprofile")
})


module.exports = router;