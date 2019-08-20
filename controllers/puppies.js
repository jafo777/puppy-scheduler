const { promisify } = require('util');
const nodemailer = require('nodemailer');
const _ = require('lodash');
const Puppy = require('../models/Puppy');


/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('puppies', {layout: 'default', template: 'home-template'});
};

exports.postPuppy = (req, res, next) => {

  const puppy = new Puppy({
      name:"Taco"
    });


  puppy.save((err) => {
    if (err) { 
      console.log(err);  
      return next(err); 
    
    }

    var query = Puppy.find();
var promise = query.exec();
promise.addBack(function (err, docs) {});
    
  });


};