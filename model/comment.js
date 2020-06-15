const   mongoose = require('mongoose');

let commentSchema = new mongoose.Schema({
    post_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "post"
    },
    owner_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    comment :String,
    create_date : Date
});

module.exports = mongoose.model('comment', commentSchema);
