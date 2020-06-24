const   express = require('express'),
        router = express.Router(),
        middleware = require('../middleware'),
        mongoose = require("mongoose"),
        multer = require('multer'),
        path = require('path'),
        fs = require('fs'),
        moment = require('moment'),
        util = require('util');
const   user = require('../model/user'),
        subject = require('../model/subject'),
        post = require('../model/post'),
        comment = require('../model/comment');
const storage = multer.diskStorage({
    destination: './public/uploads',
    filename: function(req, file, cb) {
        cb(null,path.basename(file.originalname,path.extname(file.originalname))+'-'+Date.now()+ path.extname(file.originalname));
    }
});
const imageFilter = function(req, file, cb){
    var ext = path.extname(file.originalname);
    if(ext !== '.png' && ext !== '.pptx' && ext !== '.jpg' && ext !== '.jpeg' && ext !== '.docx'  && ext !== '.pdf'&& ext !== '.xlxs'){
        return cb(new Error('Only image is allowed'), false)
        }
        cb(null, true);
};

const upload = multer({storage: storage, fileFilter: imageFilter})

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
    res.render("home",{board: response, moment: moment});
})
router.post("/",middleware.isAdmin, async function (req, res) {
    let response = await subject.aggregate([
        {
            $match: {
                "subject_name" : "home"
            }
        }
    ])
    await post.create({
        subject_id : response[0]._id,
        owner_id : res.locals.currentUser._id,
        title : req.body.text,
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
    // console.log(moment(post.create_date).format("DD/MM/YYYY"))
    res.render("CSS_224",{css224DB: response, moment: moment});
})
router.post("/CSS_224",middleware.isLoggedin,upload.single('file'),async function (req, res) {
    let response = await subject.aggregate([
        {
            $match: {
                "subject_name" : "css224"
            }
        }
    ])
    // console.log(response[0]._id)
    if(req.file){
        await post.create({
            subject_id : response[0]._id,
            owner_id : res.locals.currentUser._id,
            title : req.body.text,
            content : req.file.filename,
            create_date : new Date()
        })
        
    }else{
        await post.create({
            subject_id : response[0]._id,
            owner_id : res.locals.currentUser._id,
            title : req.body.text,
            content : "none",
            create_date : new Date()
        })
    }
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
    res.render("CSS_226",{css226DB: response, moment: moment});
})
router.post("/CSS_226",middleware.isLoggedin,upload.single('file'), async function (req, res) {
    // await post.create({
    //     subject_id : '5ee3ba3d889d531ff430dd2b',
    //     owner_id : res.locals.currentUser._id,
    //     title : req.body.text,
    //     content : "TEST",
    //     create_date : new Date()
    // })
    let response = await subject.aggregate([
        {
            $match: {
                "subject_name" : "css226"
            }
        }
    ])
    // console.log(response[0]._id)
    if(req.file){
        await post.create({
            subject_id : response[0]._id,
            owner_id : res.locals.currentUser._id,
            title : req.body.text,
            content : req.file.filename,
            create_date : new Date()
        })
        
    }else{
        await post.create({
            subject_id : response[0]._id,
            owner_id : res.locals.currentUser._id,
            title : req.body.text,
            content : "none",
            create_date : new Date()
        })
    }
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
    res.render("CSS_227",{css227DB: response, moment: moment});
})
router.post("/CSS_227",middleware.isLoggedin,upload.single('file'), async function (req, res) {
    // await post.create({
    //     subject_id : '5ee3ba404d47e20238a191c3',
    //     owner_id : res.locals.currentUser._id,
    //     title : req.body.text,
    //     content : "TEST",
    //     create_date : new Date()
    // })
    let response = await subject.aggregate([
        {
            $match: {
                "subject_name" : "css227"
            }
        }
    ])
    // console.log(response[0]._id)
    if(req.file){
        await post.create({
            subject_id : response[0]._id,
            owner_id : res.locals.currentUser._id,
            title : req.body.text,
            content : req.file.filename,
            create_date : new Date()
        })
        
    }else{
        await post.create({
            subject_id : response[0]._id,
            owner_id : res.locals.currentUser._id,
            title : req.body.text,
            content : "none",
            create_date : new Date()
        })
    }
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
    res.render("CSS_228",{css228DB: response, moment: moment});
})
router.post("/CSS_228",middleware.isLoggedin,upload.single('file'), async function (req, res) {
    // await post.create({
    //     subject_id : '5ee3ba423203304c8c7e9d76',
    //     owner_id : res.locals.currentUser._id,
    //     title : req.body.text,
    //     content : "TEST",
    //     create_date : new Date()
    // })
    let response = await subject.aggregate([
        {
            $match: {
                "subject_name" : "css228"
            }
        }
    ])
    // console.log(response[0]._id)
    if(req.file){
        await post.create({
            subject_id : response[0]._id,
            owner_id : res.locals.currentUser._id,
            title : req.body.text,
            content : req.file.filename,
            create_date : new Date()
        })
        
    }else{
        await post.create({
            subject_id : response[0]._id,
            owner_id : res.locals.currentUser._id,
            title : req.body.text,
            content : "none",
            create_date : new Date()
        })
    }
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
    res.render("LNG_224",{lng224DB: response, moment: moment});
})
router.post("/LNG_224",middleware.isLoggedin,upload.single('file'), async function (req, res) {
    // await post.create({
    //     subject_id : '5ee3ba4c08ca9f41c8fa0269',
    //     owner_id : res.locals.currentUser._id,
    //     title : req.body.text,
    //     content : "TEST",
    //     create_date : new Date()
    // })
    let response = await subject.aggregate([
        {
            $match: {
                "subject_name" : "lng224"
            }
        }
    ])
    // console.log(response[0]._id)
    if(req.file){
        await post.create({
            subject_id : response[0]._id,
            owner_id : res.locals.currentUser._id,
            title : req.body.text,
            content : req.file.filename,
            create_date : new Date()
        })
        
    }else{
        await post.create({
            subject_id : response[0]._id,
            owner_id : res.locals.currentUser._id,
            title : req.body.text,
            content : "none",
            create_date : new Date()
        })
    }
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
    res.render("GEN_241",{gen241DB: response, moment: moment});
})
router.post("/GEN_241",middleware.isLoggedin,upload.single('file'), async function (req, res) {
    // await post.create({
    //     subject_id : '5ee3ba58c5168331f4498d5f',
    //     owner_id : res.locals.currentUser._id,
    //     title : req.body.text,
    //     content : "TEST",
    //     create_date : new Date()
    // })
    let response = await subject.aggregate([
        {
            $match: {
                "subject_name" : "gen241"
            }
        }
    ])
    // console.log(response[0]._id)
    if(req.file){
        await post.create({
            subject_id : response[0]._id,
            owner_id : res.locals.currentUser._id,
            title : req.body.text,
            content : req.file.filename,
            create_date : new Date()
        })
        
    }else{
        await post.create({
            subject_id : response[0]._id,
            owner_id : res.locals.currentUser._id,
            title : req.body.text,
            content : "none",
            create_date : new Date()
        })
    }
    res.redirect("/dinsor/GEN_241")
})
router.get("/contact_us", async function (req, res) {
    res.render('contact_us')
})

/*--------------------------------------------------------------------------------------*/
router.get("/search", async function (req, res) {
    let searchtext = req.query.search
    let keyword = new RegExp(searchtext, 'i')
    let response = await post.aggregate([
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
            $unwind: "$owner_id"
        },
        {
            $project : {
                "owner_id.salt": 0,
                "owner_id.hash": 0,
            }
        },
        {
            $match: {
                "owner_id.username" : {$regex: keyword}
            }
        },
    ])
    let response2 = await post.aggregate([
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
            $unwind: "$owner_id"
        },
        {
            $project : {
                "owner_id.salt": 0,
                "owner_id.hash": 0,
            }
        },
        {
            $match: {
                "title" : {$regex: keyword}
            }
        },
    ])
    // console.log(response)
    console.log("----------------------------")
    console.log(response2)
    res.render("searchResult",{detail: response,detail2: response2, moment: moment});
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
            $unwind: {
                path :  "$comment",
                preserveNullAndEmptyArrays : true
            }
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
            $unwind: {
                path :  "$comment.owner_id",
                preserveNullAndEmptyArrays : true
            }
        },
        {
            $project : {
                "comment.owner_id.salt" :0,
                "comment.owner_id.hash" :0,
            }
        },
        {
            $sort : { "comment.create_date" : -1}
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
    if (Object.keys(response[0].comment[0]).length===0){
        response[0].comment = new Array
    }
    // console.log(util.inspect(response, {showHidden: false, depth: null}))
    res.render("showdetail",{detail: response, moment: moment});
})
router.put("/:id",middleware.havepermission,upload.single('file'), async function (req, res) {
    let n_title = req.body.title;
    if(req.file){
        let n_content = req.file.filename
        post.findById(req.params.id,function(error,found){
            if(error){
                console.log(error)
            }else{
                const filePath = './public/uploads/'+found.content
                fs.unlink(filePath, function(err){
                    if(err){
                        console.log(err);
                        res.redirect('/dinsor');
                    }
                })
            }
        })
        var n_post = {title:n_title,content:n_content};
    }else{
        // console.log('fileNotpass')
        var n_post = {title:n_title};
    }
    post.findByIdAndUpdate(req.params.id, n_post, function(error,update){
        if(error){
            res.redirect('/dinsor/'+req.params.id)
        }else{
            res.redirect('/dinsor/'+req.params.id)
        }
    })
})
router.get("/:id/edit",middleware.havepermission, async function (req, res) {
    let response = await post.aggregate([
        {
            $match: {
                _id : mongoose.Types.ObjectId(req.params.id)
            }
        },
    ])
    // console.log(req.params.id)
    // console.log(response)
    // console.log(util.inspect(response, {showHidden: false, depth: null}))
    res.render("editpost",{thatpost: response, moment: moment});
})

router.delete("/:id",middleware.havepermission, async function (req, res) {
    await post.findById(req.params.id,function(error,found){
        if(error){
            console.log(error)
        }else{
            const filePath = './public/uploads/'+found.content
            fs.unlink(filePath, function(err){
                if(err){
                    console.log(err);
                    res.redirect('/dinsor');
                }
            })
        }
    })
    await post.findByIdAndRemove(req.params.id, function(error){
        if(error){
            console.log(error)
        }
    })
    await comment.deleteMany({ post_id: req.params.id}, function (error) {
        if(error){
            console.log(error)
        }
    });
    
    req.flash('success','Post deleted')
    res.redirect('.')
})



module.exports = router;