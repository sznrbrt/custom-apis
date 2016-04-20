'use strict';

module.exports = function(params) {
  var words = decodeURIComponent(params).split(/\W/g);
  return ((words.map((word) => {return word.length}).reduce((acc, num) => {return acc + num})) / words.length);
}
