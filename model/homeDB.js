const   mongoose = require('mongoose');

let dinsorSchema = new mongoose.Schema({
    title : String
});

let home = mongoose.model("home",dinsorSchema);

module.exports = mongoose.model('HDB', dinsorSchema);