'use strict';

module.exports = function(params) {
  return decodeURIComponent(params).split(/\W/g).length;
}
