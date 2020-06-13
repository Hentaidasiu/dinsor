const   user = require('../model/user'),
        subject = require('../model/subject'),
        post = require('../model/post'),
        comment = require('../model/comment'),
        mongoose = require("mongoose")

const POST = async() => {
    try{
    const connect =  await mongoose.connect('mongodb://localhost:27017/dinsor', {useNewUrlParser: true})
    const response = await user.create({
        username : 'amin',
        password : '1234',
        create : new Date()
    })
    console.log(response)
    mongoose.connection.close()
    }
    catch(error){
        console.log(error)
        mongoose.connection.close()
    }
}
POST()

// const GET = async() => {
//     try{
//     const connect =  await mongoose.connect('mongodb://localhost:27017/dinsor', {useNewUrlParser: true,  useUnifiedTopology: true })
//     const test_data = await post.aggregate([
//         {
//             $lookup:
//             {
//                 from: "subjects",
//                 localField: "subject_id",
//                 foreignField: "_id",
//                 as: "subject_id"
//             }
//         },
//         {
//             $unwind: "$subject_id"
//         },
//         {
//             $match: {
//                 "subject_id.subject_name" : "home"
//             }
//         }
//     ])
//     console.log(test_data)
//     mongoose.connection.close()
//     }
//     catch(error){
//         console.log(error)
//         mongoose.connection.close()
//     }
// }
// GET()