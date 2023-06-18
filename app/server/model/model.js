const mongoose = require('mongoose');

var schema = new mongoose.Schema({
   
title:{
    type: String,
    required: true

},
content:{
    type:String,
    required: true


}


})

const userNotes = mongoose.model('usernotes', schema);

module.exports = userNotes
