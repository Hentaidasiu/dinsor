const   express = require('express'),
        router = express.Router(),
        middleware = require('../middleware');
        mongoose = require("mongoose")
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
    // console.log(response)
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
// router.get("/:id", function(req,res){
//     User.findById(req.params.id).populate('css224').exec (function(error, idpost){
//         if(error){
//             connsole.log("Error")
//         }else{
//             res.render("showdetail",{detail:idpost})
//         }
//     })
//     // User.findOne(req.params.id).populate('css224').exec(function(err, idpost){
//     //     if(err){
//     //         console.log(err);
//     //     } else {
//     //         res.render("showdetail",{detail:idpost})
//     //     }
//     // });
// })
router.get("/:id", async function (req, res) {
    let response = await post.aggregate([
        {
            $lookup:
            {
                localField: "_id",
                from: "comment",
                foreignField: "post_id",
                as: "comment"
            }
        },
        // {
        //     $match: {
        //         "comment.post_id" : req.params.id
        //     }
        // },
        {
            $sort: {
                "create_date": -1
            }
        }
    ])
    // console.log(req.params.id)
    console.log(response)
    res.render("showdetail",{detail: response});
})
// router.post("/GEN_241",middleware.isLoggedin, async function (req, res) {
//     await post.create({
//         subject_id : '5ee3ba58c5168331f4498d5f',
//         owner_id : res.locals.currentUser._id,
//         title : req.body.text,
//         content : "TEST",
//         create_date : new Date()
//     })
//     res.redirect("/dinsor/GEN_241")
// })
// comment.create({
//     post_id : '5ee4295bceadfa2194968190',
//     owner_id : '5ee3f2abcab03b3018c721ef',
//     comment :'comment test',
//     create_date : new Date()
// })

module.exports = router;