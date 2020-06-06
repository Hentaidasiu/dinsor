const   mongoose = require('mongoose');

let dinsorSchema = new mongoose.Schema({
    title : String,
    p_username : String
});

let css226DB = mongoose.model("css226DB",dinsorSchema);

module.exports = mongoose.model('css226DB', dinsorSchema);