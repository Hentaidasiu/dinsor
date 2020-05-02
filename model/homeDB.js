const   mongoose = require('mongoose');

let dinsorSchema = new mongoose.Schema({
    title : String
});

module.exports = mongoose.model('HomeDB', dinsorSchema);