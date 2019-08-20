const mongoose = require('mongoose');

const puppySchema = new mongoose.Schema({
  name: String 

});


const Puppy = mongoose.model('Puppy', puppySchema);

module.exports = Puppy;