const   mongoose = require('mongoose');

let dinsorSchema = new mongoose.Schema({
    title : String,
    p_username : String
});

let css227DB = mongoose.model("css227DB",dinsorSchema);

module.exports = mongoose.model('css227DB', dinsorSchema);