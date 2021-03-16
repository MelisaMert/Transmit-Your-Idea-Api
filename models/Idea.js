const mongoose = require('mongoose');

const Schema  = mongoose.Schema;

const IdeaSchema = new Schema({
 senderFullName: String,
 senderEmailAddress: String,
 suggestionType: String,
 suggestion: String
})

// convert from scheme to model
module.exports = mongoose.model('idea',IdeaSchema);



