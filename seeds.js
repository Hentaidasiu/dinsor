const mongoose = require('mongoose'),
        board = require('./model/homeDB');

const data = [
    {
        title: "Hi!",
        p_username: "admin"
    }
]

function seedDB(){
    board.remove({}, function(error){
        if(error){
            console.log('Remove database error')
        }
        console.log('Drop database success')
        data.forEach(function(seed){
            board.create(seed, function(error, board){
                if(error){
                    console.log('Add post error')
                }else{
                    console.log('Added a post')
                }
            })
        })
    })
}

module.exports = seedDB;