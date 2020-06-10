const   mongoose = require('mongoose');

let css224Schema = new mongoose.Schema({
    title : String,
    p_username : String,
    comments : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "commentDB"
        }
    ]
});

let css224DB = mongoose.model("css224DB",css224Schema);

module.exports = mongoose.model('css224DB', css224Schema);