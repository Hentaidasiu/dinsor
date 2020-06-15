const   mongoose = require('mongoose');

let postSchema = new mongoose.Schema({
    subject_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "subject"
    },
    owner_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    ],
    title : String,
    content : String,
    create_date : Date
});

module.exports = mongoose.model('post', postSchema);