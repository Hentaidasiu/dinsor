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

comment.create({
        post_id : '5ee4295bceadfa2194968190',
        owner_id : '5ee3f2abcab03b3018c721ef',
        comment :'hello',
        create_date : new Date()
    }
)