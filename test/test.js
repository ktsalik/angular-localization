var express = require('express');
var server = express();

server.use(express.static(__dirname + '/../test'));
server.use(express.static(__dirname + '/../dist'));
server.use(express.static(__dirname + '/../node_modules'));

server.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

serverInstance = server.listen('8080');

var Ultron = require('ultronjs');

var ultron = new Ultron('chrome');

ultron
  .it("should change the language")
  .describe(function() {
    this.open('http://localhost:8080');
    this.wait('button').toAppear();
    this.$('body').should.haveContent('hello');
    this.click('#btn-el');
    this.wait.for(500);
    this.$('body').should.haveContent('γεια');
    this.click('#btn-en');
    this.wait.for(500);
    this.$('body').should.haveContent('hello');
  })
  .run()
  .then(function() {
    ultron.end();
    serverInstance.close();
  })