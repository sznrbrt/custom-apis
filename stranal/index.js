'use strict';

module.exports = function(params, res) {
  var operation = params.shift().toLowerCase();

  switch(operation) {
    case 'wordcount':
      var wordcount = require('./wordcount')(params);
      res.write(`${wordcount}`);
      break;
    case 'charactercount':
      var charactercount = require('./charactercount')(params);
      res.write(`${charactercount}`);
      break;
    case 'avgwordlength':
      var avgwordlength = require('./avgwordlength')(params);
      res.write(`${avgwordlength}`);
      break;
  }

  res.end('\n');
}
