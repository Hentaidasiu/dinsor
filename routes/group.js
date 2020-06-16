const   express = require('express'),
        router = express.Router(),
        middleware = require('../middleware'),
        mongoose = require("mongoose"),
        util = require('util');
const   user = require('../model/user'),
        subject = require('../model/subject'),
        post = require('../model/post'),
        comment = require('../model/comment');


/*-------------------------------------------*/
router.get("/", async function (req, res) {
    let response = await post.aggregate([
        {
            $lookup:
            {
                localField: "subject_id",
                from: "subjects",
                foreignField: "_id",
                as: "subject_id"
            }
        },
        {
            $lookup:
            {
                localField: "owner_id",
                from: "users",
                foreignField: "_id",
                as: "owner_id"
            }
        },
        {
            $unwind: "$subject_id"
        },
        {
            $unwind: "$owner_id"
        },
        {
            $match: {
                "subject_id.subject_name" : "home"
            }
        },
        {
            $project : {
                "owner_id.salt": 0,
                "owner_id.hash": 0,
            }
        },
        {
            $sort: {
                "create_date": -1
            }
        }
    ])
    // console.log(response)
    res.render("home",{board: response});
})
router.post("/",middleware.isLoggedin, async function (req, res) {
    await post.create({
        subject_id : '5ee3b942f045132348e42e56',
        owner_id : res.locals.currentUser._id,
        title : req.body.text,
        content : "TEST",
        create_date : new Date()
    })
    res.redirect("/dinsor")
})
/*-------------------------------------------*/
router.get("/CSS_224", async function (req, res) {
    let response = await post.aggregate([
        {
            $lookup:
            {
                localField: "subject_id",
                from: "subjects",
                foreignField: "_id",
                as: "subject_id"
            }
        },
        {
            $lookup:
            {
                localField: "owner_id",
                from: "users",
                foreignField: "_id",
                as: "owner_id"
            }
        },
        {
            $unwind: "$subject_id"
        },
        {
            $unwind: "$owner_id"
        },
        {
            $match: {
                "subject_id.subject_name" : "css224"
            }
        },
        {
            $project : {
                "owner_id.salt": 0,
                "owner_id.hash": 0,
            }
        },
        {
            $sort: {
                "create_date": -1
            }
        }
    ])
    // console.log(response)
    res.render("CSS_224",{css224DB: response});
})
router.post("/CSS_224",middleware.isLoggedin, async function (req, res) {
    await post.create({
        subject_id : '5ee3ba399a2faa29f4f62149',
        owner_id : res.locals.currentUser._id,
        title : req.body.text,
        content : "TEST",
        create_date : new Date()
    })
    res.redirect("/dinsor/CSS_224")
})
/*-------------------------------------------*/
router.get("/CSS_226", async function (req, res) {
    let response = await post.aggregate([
        {
            $lookup:
            {
                localField: "subject_id",
                from: "subjects",
                foreignField: "_id",
                as: "subject_id"
            }
        },
        {
            $lookup:
            {
                localField: "owner_id",
                from: "users",
                foreignField: "_id",
                as: "owner_id"
            }
        },
        {
            $unwind: "$subject_id"
        },
        {
            $unwind: "$owner_id"
        },
        {
            $match: {
                "subject_id.subject_name" : "css226"
            }
        },
        {
            $project : {
                "owner_id.salt": 0,
                "owner_id.hash": 0,
            }
        },
        {
            $sort: {
                "create_date": -1
            }
        }
    ])
    // console.log(response)
    res.render("CSS_226",{css226DB: response});
})
router.post("/CSS_226",middleware.isLoggedin, async function (req, res) {
    await post.create({
        subject_id : '5ee3ba3d889d531ff430dd2b',
        owner_id : res.locals.currentUser._id,
        title : req.body.text,
        content : "TEST",
        create_date : new Date()
    })
    res.redirect("/dinsor/CSS_226")
})
/*-------------------------------------------*/
router.get("/CSS_227", async function (req, res) {
    let response = await post.aggregate([
        {
            $lookup:
            {
                localField: "subject_id",
                from: "subjects",
                foreignField: "_id",
                as: "subject_id"
            }
        },
        {
            $lookup:
            {
                localField: "owner_id",
                from: "users",
                foreignField: "_id",
                as: "owner_id"
            }
        },
        {
            $unwind: "$subject_id"
        },
        {
            $unwind: "$owner_id"
        },
        {
            $match: {
                "subject_id.subject_name" : "css227"
            }
        },
        {
            $project : {
                "owner_id.salt": 0,
                "owner_id.hash": 0,
            }
        },
        {
            $sort: {
                "create_date": -1
            }
        }
    ])
    // console.log(response)
    res.render("CSS_227",{css227DB: response});
})
router.post("/CSS_227",middleware.isLoggedin, async function (req, res) {
    await post.create({
        subject_id : '5ee3ba404d47e20238a191c3',
        owner_id : res.locals.currentUser._id,
        title : req.body.text,
        content : "TEST",
        create_date : new Date()
    })
    res.redirect("/dinsor/CSS_227")
})
/*-------------------------------------------*/
router.get("/CSS_228", async function (req, res) {
    let response = await post.aggregate([
        {
            $lookup:
            {
                localField: "subject_id",
                from: "subjects",
                foreignField: "_id",
                as: "subject_id"
            }
        },
        {
            $lookup:
            {
                localField: "owner_id",
                from: "users",
                foreignField: "_id",
                as: "owner_id"
            }
        },
        {
            $unwind: "$subject_id"
        },
        {
            $unwind: "$owner_id"
        },
        {
            $match: {
                "subject_id.subject_name" : "css228"
            }
        },
        {
            $project : {
                "owner_id.salt": 0,
                "owner_id.hash": 0,
            }
        },
        {
            $sort: {
                "create_date": -1
            }
        }
    ])
    // console.log(response)
    res.render("CSS_228",{css228DB: response});
})
router.post("/CSS_228",middleware.isLoggedin, async function (req, res) {
    await post.create({
        subject_id : '5ee3ba423203304c8c7e9d76',
        owner_id : res.locals.currentUser._id,
        title : req.body.text,
        content : "TEST",
        create_date : new Date()
    })
    res.redirect("/dinsor/CSS_228")
})
/*-------------------------------------------*/
router.get("/LNG_224", async function (req, res) {
    let response = await post.aggregate([
        {
            $lookup:
            {
                localField: "subject_id",
                from: "subjects",
                foreignField: "_id",
                as: "subject_id"
            }
        },
        {
            $lookup:
            {
                localField: "owner_id",
                from: "users",
                foreignField: "_id",
                as: "owner_id"
            }
        },
        {
            $unwind: "$subject_id"
        },
        {
            $unwind: "$owner_id"
        },
        {
            $match: {
                "subject_id.subject_name" : "lng224"
            }
        },
        {
            $project : {
                "owner_id.salt": 0,
                "owner_id.hash": 0,
            }
        },
        {
            $sort: {
                "create_date": -1
            }
        }
    ])
    // console.log(response)
    res.render("LNG_224",{lng224DB: response});
})
router.post("/LNG_224",middleware.isLoggedin, async function (req, res) {
    await post.create({
        subject_id : '5ee3ba4c08ca9f41c8fa0269',
        owner_id : res.locals.currentUser._id,
        title : req.body.text,
        content : "TEST",
        create_date : new Date()
    })
    res.redirect("/dinsor/LNG_224")
})
/*-------------------------------------------*/
router.get("/GEN_241", async function (req, res) {
    let response = await post.aggregate([
        {
            $lookup:
            {
                localField: "subject_id",
                from: "subjects",
                foreignField: "_id",
                as: "subject_id"
            }
        },
        {
            $lookup:
            {
                localField: "owner_id",
                from: "users",
                foreignField: "_id",
                as: "owner_id"
            }
        },
        {
            $unwind: "$subject_id"
        },
        {
            $unwind: "$owner_id"
        },
        {
            $match: {
                "subject_id.subject_name" : "gen241"
            }
        },
        {
            $project : {
                "owner_id.salt": 0,
                "owner_id.hash": 0,
            }
        },
        {
            $sort: {
                "create_date": -1
            }
        }
    ])
    console.log(response)
    res.render("GEN_241",{gen241DB: response});
})
router.post("/GEN_241",middleware.isLoggedin, async function (req, res) {
    await post.create({
        subject_id : '5ee3ba58c5168331f4498d5f',
        owner_id : res.locals.currentUser._id,
        title : req.body.text,
        content : "TEST",
        create_date : new Date()
    })
    res.redirect("/dinsor/GEN_241")
})
/*--------------------------------------------------------------------------------------*/
router.get("/:id", async function (req, res) {
    let response = await post.aggregate([
        {
            $match: {
                _id : mongoose.Types.ObjectId(req.params.id)
            }
        },
        {
            $lookup:
            {
                localField: "subject_id",
                from: "subjects",
                foreignField: "_id",
                as: "subject_id"
            }
        },
        {
            $lookup:
            {
                localField: "owner_id",
                from: "users",
                foreignField: "_id",
                as: "owner_id"
            }
        },
        {
            $lookup:
            {
                localField: "_id",
                from: "comments",
                foreignField: "post_id",
                as: "comment"
            }
        },
        {
            $unwind: "$subject_id"
        },
        {
            $unwind: "$owner_id"
        },
        {
            $project : {
                "owner_id.salt": 0,
                "owner_id.hash": 0,
                "comment.owner_id.salt" :0,
                "comment.owner_id.hash" :0,
            }
        },
        {
            $unwind: "$comment"
        },

        {
            $sort : { "comment.create_date" : -1}
        },
        {
            $lookup:
            {
                localField: "comment.owner_id",
                from: "users",
                foreignField: "_id",
                as: "comment.owner_id"
            }
        },
        {
            $unwind: "$comment.owner_id"
        },
        {
            $project : {
                "comment.owner_id.salt" :0,
                "comment.owner_id.hash" :0,
            }
        },
        {
            $group : {
                _id : {_id : "$_id"},
                subject_id: {$first : "$subject_id"},
                owner_id: {$first : "$owner_id"},
                title: {$first : "$title"},
                content: {$first : "$content"},
                subject_id: {$first : "$subject_id"},
                comment : {$push : "$comment"}
            }
        }
    ])
    // console.log(req.params.id)
    // console.log(response)
    // console.log(util.inspect(response, {showHidden: false, depth: null}))
    res.render("showdetail",{detail: response});
})
router.post("/comment/:id",middleware.isLoggedin, async function (req, res) {
    await comment.create({
        post_id : req.params.id,
        owner_id : res.locals.currentUser._id,
        comment : req.body.text,
        create_date : new Date()
    })
    console.log("wtf R")
})

module.exports = router;