const EventEmitter = require('events');
const emitter = new EventEmitter();

//Register a listner
// using arrow functions : ( =>)
emitter.on('messageLogged', (arg) => {
    console.log('Listner called', arg);
});

//Raise an event 
//{id : 1, url : '..'} is an object
emitter.emit('messageLogged', { id: 1, url:'http://'});
//Listner called { id: 1, url: 'http://' }

//Raise event called logging 
//And while raising this event we also want to send some data
//That is the message that we're going to log 
// Raise logging (data : message)
// ::

//Register a listner
emitter.on('logging', (data) => {
    console.log('message', data);
});

//Raise an event 
emitter.emit('logging', { id: 2, name: "log"});
//message { id: 2, name: 'log' }