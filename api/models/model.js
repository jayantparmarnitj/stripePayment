var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    paymentId:  String,
    customerId:  String
});

module.exports = mongoose.model('Tasks', schema);