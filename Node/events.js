var events = require('events');

var eventEmitter = new events.EventEmitter();

var connectHandler = function connected() 
{
console.log('connection succesful');
eventEmitter.emit('data_recieved');
}

eventEmitter.on('connection',connectHandler)

var yell = function yeller()
{
console.log('data received succesfully.');
}

eventEmitter.on('data_recieved',yell)

eventEmitter.emit('connection');
console.log("program ended");




