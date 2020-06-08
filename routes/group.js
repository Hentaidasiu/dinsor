const   express = require('express'),
        router = express.Router(),
        User = require('../model/user'),
        board = require('../model/homeDB'),
        css224DB = require('../model/CSS224DB'),
        css226DB = require('../model/CSS226DB'),
        css227DB = require('../model/CSS227DB'),
        css228DB = require('../model/CSS228DB'),
        gen241DB = require('../model/GEN241DB'),
        lng224DB = require('../model/LNG224DB'),
        middleware = require('../middleware');

// router.use(function(req,res,next){
//     res.locals.currentUser = req.user;
//     next();
// })
/*-------------------------------------------*/
router.get("/", function (req, res) {
    board.find({},function(error, allboard){
        if(error){
            console.log("Error!");
        }
        else{
            res.render("home",{board:allboard});
        }
    })
})
router.post("/",middleware.isLoggedin, function (req, res) {
    let n_input = req.body.text
    let user_input = res.locals.currentUser.username
    let n_text = { title: n_input, p_username: user_input}
    board.create(n_text, function(error,newText){
        if(error){
            console.log("Error!")
        }
        else{
            console.log("New Text Add")
            res.redirect("/dinsor")
        }
    })
})
/*-------------------------------------------*/
router.get("/CSS_224", function (req, res) {
    css224DB.find({},function(error, allcss224DB){
        if(error){
            console.log("Error!");
        }
        else{
            res.render("CSS_224",{css224DB:allcss224DB});
        }
    })
})

router.post("/CSS_224",middleware.isLoggedin, function (req, res) {
    let n_input = req.body.text
    let user_input = res.locals.currentUser.username
    let n_text = { title: n_input, p_username: user_input}
    css224DB.create(n_text, function(error,newText){
        if(error){
            console.log("Error!")
        }
        else{
            console.log("New Text Add")
            res.redirect("/dinsor/css_224")
        }
    })
})
/*-------------------------------------------*/
router.get("/CSS_226", function (req, res) {
    css226DB.find({},function(error, allcss226DB){
        if(error){
            console.log("Error!");
        }
        else{
            res.render("CSS_226",{css226DB:allcss226DB});
        }
    })
})

router.post("/CSS_226",middleware.isLoggedin, function (req, res) {
    let n_input = req.body.text
    let user_input = res.locals.currentUser.username
    let n_text = { title: n_input, p_username: user_input}
    css226DB.create(n_text, function(error,newText){
        if(error){
            console.log("Error!")
        }
        else{
            console.log("New Text Add")
            res.redirect("/dinsor/css_226")
        }
    })
})
/*-------------------------------------------*/
router.get("/CSS_227", function (req, res) {
    css227DB.find({},function(error, allcss227DB){
        if(error){
            console.log("Error!");
        }
        else{
            res.render("CSS_227",{css227DB:allcss227DB});
        }
    })
})

router.post("/CSS_227",middleware.isLoggedin, function (req, res) {
    let n_input = req.body.text
    let user_input = res.locals.currentUser.username
    let n_text = { title: n_input, p_username: user_input}
    css227DB.create(n_text, function(error,newText){
        if(error){
            console.log("Error!")
        }
        else{
            console.log("New Text Add")
            res.redirect("/dinsor/CSS_227")
        }
    })
})
/*-------------------------------------------*/
router.get("/CSS_228", function (req, res) {
    css228DB.find({},function(error, allcss228DB){
        if(error){
            console.log("Error!");
        }
        else{
            res.render("CSS_228",{css228DB:allcss228DB});
        }
    })
})

router.post("/CSS_228",middleware.isLoggedin, function (req, res) {
    let n_input = req.body.text
    let user_input = res.locals.currentUser.username
    let n_text = { title: n_input, p_username: user_input}
    css228DB.create(n_text, function(error,newText){
        if(error){
            console.log("Error!")
        }
        else{
            console.log("New Text Add")
            res.redirect("/dinsor/CSS_228")
        }
    })
})
/*-------------------------------------------*/
router.get("/LNG_224", function (req, res) {
    lng224DB.find({},function(error, alllng224DB){
        if(error){
            console.log("Error!");
        }
        else{
            res.render("LNG_224",{lng224DB:alllng224DB});
        }
    })
})

router.post("/LNG_224",middleware.isLoggedin, function (req, res) {
    let n_input = req.body.text
    let user_input = res.locals.currentUser.username
    let n_text = { title: n_input, p_username: user_input}
    lng224DB.create(n_text, function(error,newText){
        if(error){
            console.log("Error!")
        }
        else{
            console.log("New Text Add")
            res.redirect("/dinsor/LNG_224")
        }
    })
})
/*-------------------------------------------*/
router.get("/GEN_241", function (req, res) {
    gen241DB.find({},function(error, allgen241DB){
        if(error){
            console.log("Error!");
        }
        else{
            res.render("GEN_241",{gen241DB:allgen241DB});
        }
    })
})

router.post("/GEN_241",middleware.isLoggedin, function (req, res) {
    let n_input = req.body.text
    let user_input = res.locals.currentUser.username
    let n_text = { title: n_input, p_username: user_input}
    gen241DB.create(n_text, function(error,newText){
        if(error){
            console.log("Error!")
        }
        else{
            console.log("New Text Add")
            res.redirect("/dinsor/GEN_241")
        }
    })
})
/*--------------------------------------------------------------------------------------*/
router.get("/:id", function(req,res){
    css224DB.findById(req.params.id, function(error, idpost){
        if(error){
            connsole.log("Error")
        }else{
            res.render("showdetail",{css224detail:idpost})
        }
    })
})


module.exports = router;