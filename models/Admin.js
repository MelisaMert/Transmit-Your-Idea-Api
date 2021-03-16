const mongoose = require('mongoose');

const Schema  = mongoose.Schema;

const AdminSchema = new Schema({
   username:String,
   password:String
})

// convert from scheme to model
module.exports = mongoose.model('admin',AdminSchema);


