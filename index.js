'use strict';
var Alexa = require("alexa-sdk");

var express = require("express");
var https = require('https');
var app = express();

var port = process.env.PORT || 8083;
console.log("inside the index js");
//app.use(express.logger());

app.get('/', function(request, response) {
  console.log('[support dash] processing get request');
  response.send('Hello World 2!');
});



console.log("eg");

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
    console.log("eg1");

};


var handlers = {
    'LaunchRequest': function () {
        this.emit('SayHello');
    },
    'HelloWorldIntent': function () {
        this.emit('SayHello')
    },
    'SayHello': function () {
        this.emit(':tell', 'Hello World!');
    }
};

console.log(' port ' + port);

https.createServer(function (req, res) {
    handler(req);
}).listen(port);
