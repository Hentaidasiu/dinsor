const   mongoose = require('mongoose');

let subjectSchema = new mongoose.Schema({
    subject_name : String
});

module.exports = mongoose.model('subject', subjectSchema);