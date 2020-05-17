const   mongoose = require('mongoose');

let dinsorSchema = new mongoose.Schema({
    title : String,
    p_username : String
});

let board = mongoose.model("board",dinsorSchema);

module.exports = mongoose.model('board', dinsorSchema);