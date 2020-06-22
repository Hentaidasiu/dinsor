const   mongoose = require('mongoose'),
        passportLocalMongoose = require('passport-local-mongoose');

let userSchema = new mongoose.Schema({
    username : String,
    permission : String
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('user', userSchema);