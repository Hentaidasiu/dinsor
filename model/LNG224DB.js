const   mongoose = require('mongoose');

let dinsorSchema = new mongoose.Schema({
    title : String,
    p_username : String
});

let lng224DB = mongoose.model("lng224DB",dinsorSchema);

module.exports = mongoose.model('lng224DB', dinsorSchema);