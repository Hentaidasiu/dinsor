const   mongoose = require('mongoose');

let dinsorSchema = new mongoose.Schema({
    title : String,
    p_username : String
});

let css228DB = mongoose.model("css228DB",dinsorSchema);

module.exports = mongoose.model('css228DB', dinsorSchema);