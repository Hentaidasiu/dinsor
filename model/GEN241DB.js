const   mongoose = require('mongoose');

let dinsorSchema = new mongoose.Schema({
    title : String,
    p_username : String
});

let gen241DB = mongoose.model("gen241DB",dinsorSchema);

module.exports = mongoose.model('gen241DB', dinsorSchema);