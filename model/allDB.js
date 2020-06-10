const   mongoose = require('mongoose');

const User = require('./user'),
board = require('./homeDB'),
css224DB = require('./CSS224DB'),
css226DB = require('./CSS226DB'),
css227DB = require('./CSS227DB'),
css228DB = require('./CSS228DB'),
gen241DB = require('./GEN241DB'),
lng224DB = require('./LNG224DB'),
commentDB = require('./commentDB');

module.exports = mongoose.model('allDB');