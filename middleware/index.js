const   user = require('../model/user'),
        subject = require('../model/subject'),
        post = require('../model/post'),
        mongoose = require("mongoose"),
        comment = require('../model/comment');
module.exports = {
    isLoggedin(req, res, next){
        if(req.isAuthenticated()){
            return next()
        }
        req.flash('error', 'You need to login first');
        res.redirect('/login')
    },
    isAdmin(req, res, next){
        if(req.isAuthenticated()){
            user.findById(res.locals.currentUser._id, function(err, founduser){
                if(err){
                    //res.redirect("back");
                    console.log(err)
                    res.redirect('back');
                    
                }
                if(founduser.permission.toString() == "admin") {

                    next();
                } else {
                    req.flash('error', 'Sorry, only admin can do this!');
                    res.redirect('back');
                }
            });
        } else {
            req.flash('error', 'You need to login first');
            res.redirect('back');
        }
    },
    checkPostOwnership(req, res, next){
        if(req.isAuthenticated()){
            post.findById(req.params.id, function(err, foundpost){
                if(err){
                    //res.redirect("back");
                    console.log(err)
                    res.redirect('back');
                    
                }
                if(foundpost.owner_id.toString() == res.locals.currentUser._id) {

                    next();
                } else {
                    res.redirect('back');
                }
            });
        } else {
            req.flash('error', 'You need to login first');
            res.redirect('back');
        }
    },
    havepermission(req, res, next){
        if(req.isAuthenticated()){
            user.findById(res.locals.currentUser._id, function(err, founduser){
                post.findById(req.params.id, function(err, foundpost){
                    if(err){
                    //res.redirect("back");
                    console.log(err)
                    res.redirect('back');
                        
                    }
                    if(founduser.permission.toString() == "admin") {

                        next();

                    } else {
                        if(foundpost.owner_id.toString() == res.locals.currentUser._id) {

                            next();

                        } else {
                        res.redirect('back');
                        }
                    }
                });     
            });
        } else {
            req.flash('error', 'You need to login first');
            res.redirect('back');
        }
    },
    
    // checkCommentOwnership(req, res, next){
    //     if(req.isAuthenticated()){
    //         comment.findById(req.params.id, function(err, foundComment){
    //             if(err){
    //                 res.redirect("back");
    //             } else {
    //                 if(foundComment.author.id.equals(req.user._id)) {
    //                     next();
    //                 } else {
    //                     res.redirect('back');
    //                 }
    //             }
    //         });
    //     } else {
    //         res.redirect('back');
    //     }
    // }
}