'use strict';

const http = require('http');
const fs = require('fs');

const PORT = 3000;

var server = http.createServer((req, res) => {
  var params = req.url.split('/');
  params.shift();

  var resource = params.shift().toLowerCase();

  switch (resource) {
      case 'math': require('./math')(params, res); break;
      case 'stranal': require('./stranal')(params, res); break;
      case 'calcage': require('./calcage')(params, res); break;
      case 'getgravatar': require('./getgravatar')(params, res); break;
      case '':
        var data = fs.readFileSync('./public/index.html');
        res.end(data.toString());
        return
        break;
      default:
        fs.readFile(`./public/${resource}`, (err, data) => {
            if(err) {
              res.statusCode = 404;
              res.write('Not found.');
              res.end('\n');
            } else {
              res.end(data.toString());
            }
        })
  }
});

server.listen(PORT, (err) => {
  if(err) return console.error('error!:', err);
  console.log(`Node server listening on port ${PORT}.`);
});
