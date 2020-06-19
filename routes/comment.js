const   express = require('express'),
        router = express.Router({mergeParams: true}),
        mongoose = require("mongoose"),
        middleware = require('../middleware');
const   user = require('../model/user'),
        subject = require('../model/subject'),
        post = require('../model/post'),
        comment = require('../model/comment');

router.post('/', middleware.isLoggedin,async function (req, res) {
    await comment.create({
        post_id : req.params.id,
        owner_id : res.locals.currentUser._id,
        comment : req.body.comment,
        create_date : new Date()
    })
    res.redirect('/dinsor/' + req.params.id);
});
router.get('/:comment_id/edit',async function (req, res) {
    let response = await comment.aggregate([
        {
            $match: {
                _id : mongoose.Types.ObjectId(req.params.comment_id)
            }
        },
    ])
    console.log(response)
    res.render("editcomment",{thatcomment: response});
});
router.put('/:comment_id',async function (req, res) {
    comment.findByIdAndUpdate(req.params.comment_id, req.body.thatcomment, function(error,update){
        if(error){
            console.log(error)
        }else{
            res.redirect('/dinsor/'+req.params.id)
        }
    })
});
router.delete('/:comment_id',async function (req, res) {
    comment.findByIdAndRemove(req.params.comment_id, function(error,rm){
        if(error){
            console.log(error)
        }else{
            res.redirect('/dinsor/'+req.params.id)
        }
    })
});

// comment.create({
//     post_id : '5ee8ef97d09b8257042e9c97',
//     owner_id : '5ee3f2abcab03b3018c721ef',
//     comment : 'hello',
//     create_date : new Date(),
// })

module.exports = router;