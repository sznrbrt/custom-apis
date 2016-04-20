'use strict';

module.exports = function(params, res) {
  var operation = params.shift();

  switch(operation) {
    case 'sum':
      var sum = require('./sum')(params);
      res.write(`${sum}`);
      break;
    case 'sub':
      var difference = require('./sub')(params);
      res.write(`${difference}`);
      break;
    case 'mult':
      var product = require('./mult')(params);
      res.write(`${product}`);
      break;
    case 'div':
      var quotient = require('./div')(params);
      res.write(`${quotient}`);
      break;
    case 'pow':
      var power = require('./pow')(params);
      res.write(`${power}`);
      break;
  }

  res.end('\n');
}
