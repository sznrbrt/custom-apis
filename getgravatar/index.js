'use strict';

var md5 = require('md5');
var request = require('request');

module.exports = function(params, res) {
  var md5Email = md5(decodeURIComponent(params[0]));
  var gravUrl = `https://s.gravatar.com/avatar/${md5Email}?s=80`;
  res.write(gravUrl.toString());
  res.end('\n');
}
