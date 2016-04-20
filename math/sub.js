'use strict';

module.exports = function(params) {
  return params.map(Number).reduce(function(acc, num){
    return acc - num;
  })
}
