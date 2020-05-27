const   express = require('express'),
        router = express.Router(),
        User = require('../model/user'),
        board = require('../model/homeDB'),
        css224DB = require('../model/CSS224DB');
router.use(function(req,res,next){
    res.locals.currentUser = req.user;
    next();
})
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
router.post("/",isLoggedin, function (req, res) {
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
router.get("/css_224", function (req, res) {
    css224DB.find({},function(error, allcss224DB){
        if(error){
            console.log("Error!");
        }
        else{
            res.render("CSS_224",{css224DB:allcss224DB});
        }
    })
})

router.post("/css_224",isLoggedin, function (req, res) {
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
    res.render("CSS_226")
})
/*-------------------------------------------*/
router.get("/CSS_227", function (req, res) {
    res.render("CSS_227")
})
/*-------------------------------------------*/
router.get("/CSS_228", function (req, res) {
    res.render("CSS_228")
})
/*-------------------------------------------*/
router.get("/LNG_224", function (req, res) {
    res.render("LNG_224")
})
/*-------------------------------------------*/
router.get("/GEN_241", function (req, res) {
    res.render("GEN_241")
})
/*--------------------------------------------------------------------------------------*/
function isLoggedin(req, res, next){
    if(req.isAuthenticated()){
        return next()
    }
    res.redirect('/login')
}
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