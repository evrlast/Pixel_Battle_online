const mongoose = require('mongoose');
const config = require('../config/db');

const  arraySchema = mongoose.Schema({
    array: {
        type: String,
        required: true
    }
});

const arr = module.exports = mongoose.model('arr', arraySchema);

module.exports.changeArray = function (arr, callback) {
    arr.save(callback);
}
