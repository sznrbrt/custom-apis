'use strict';

module.exports = function(params, res) {
  var dateInputs = decodeURIComponent(params).split('-');
  var birtDate = new Date(params);
  var today = new Date();
  var age = Math.floor(((((((today - birtDate) / 1000) / 60) / 60) / 24) / 365));
  res.write(age.toString());
  res.end('\n');
}
