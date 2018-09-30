var https = require('https'); //gets the https module

console.log("https module aquired!");

var options = {
  host: 'www.example.org',
  path: '/'
};

//called by https when request is made
var callback = function(response) {
  console.log("Responding to handler callback!");

  response.on('data', function(chunk) {
    console.log("[-- CHUNK OF LENGTH " + chunk.length + " --]");
    console.log(chunk.toString());
  });
};

console.log("I'm about to make a request...");

https.request(options, callback).end();

console.log("I've made the request!");