const   mongoose = require('mongoose'),
        passportLocalMongoose = require('passport-local-mongoose');

let dinsorSchema = new mongoose.Schema({
    username : String,
    password : String
});

dinsorSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', dinsorSchema);