//this grabs our module in server.js
var server = require('./server.js');
var router = require('./router.js');
var requestHandlers = require('./requestHandlers.js');

var handle = {};
  handle['/'] = requestHandlers.start;
  handle['/start'] = requestHandlers.start;
  handle['/upload'] = requestHandlers.upload;
  handle['/show'] = requestHandlers.show;
//server variable has access to the start function in the module we created
server.start(router.route, handle);