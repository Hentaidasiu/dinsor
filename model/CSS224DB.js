const   mongoose = require('mongoose');

let dinsorSchema = new mongoose.Schema({
    title : String,
    p_username : String
});

let css224DB = mongoose.model("css224DB",dinsorSchema);

module.exports = mongoose.model('css224DB', dinsorSchema);