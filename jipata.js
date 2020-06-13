const   express = require("express"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    passport = require('passport'),
    passportLocal = require('passport-local'),
    passportLocalMongoose = require('passport-local-mongoose'),
    path = require('path'),
    flash = require('connect-flash'),
    indexRoutes = require('./routes/index'),
    groupRoutes = require('./routes/group');
    // seedDB = require('./seeds');
const   user = require('./model/user'),
    subject = require('./model/subject'),
    post = require('./model/post'),
    comment = require('./model/comment');

mongoose.connect('mongodb://localhost:27017/dinsor', {useNewUrlParser: true});

post.create({
    subject_name : 'gen241'
    },
    function(error, home){
        if(error){
            console.log("Error!");
        }
        else{
            console.log("Added!!");
            console.log(home);
        }
    }
)