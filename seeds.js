const mongoose = require('mongoose')
const   user = require('./model/user'),
        subject = require('./model/subject'),
        post = require('./model/post'),
        comment = require('./model/comment');

const data = [
    {
        subject_name: "home"
    },
    {
        subject_name: "css224"
    },
    {
        subject_name: "css226"
    },
    {
        subject_name: "css227"
    },
    {
        subject_name: "css228"
    },
    {
        subject_name: "lng224"
    },
    {
        subject_name: "gen241"
    },
]

function seedDB(){
    // board.remove({}, function(error){
    //     if(error){
    //         console.log('Remove database error')
    //     }
    //     console.log('Drop database success')
    //     data.forEach(function(seed){
    //         board.create(seed, function(error, board){
    //             if(error){
    //                 console.log('Add post error')
    //             }else{
    //                 console.log('Added a post')
    //             }
    //         })
    //     })
    // })
    subject.remove({}, function(error){
        if(error){
            console.log('Remove database error')
        }
        console.log('Drop database success')
        data.forEach(function(seed){
            subject.create(seed, function(error, subject){
                if(error){
                    console.log('Add subject error')
                }else{
                    console.log('Subject added')
                }
            })
        })
    })
}

module.exports = seedDB;