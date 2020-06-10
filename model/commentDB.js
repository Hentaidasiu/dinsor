const   mongoose = require('mongoose');

let commentSchema = new mongoose.Schema({
    text : String,
    p_username : String
});

let comment = mongoose.model("commentDB",commentSchema);

module.exports = mongoose.model('commentDB', commentSchema);