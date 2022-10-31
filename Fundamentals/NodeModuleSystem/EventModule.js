//HTTP class that we can use to build a web server


//EventEmitter is a class
const EventEmitter = require('events');

//emitter is an object
const emitter = new EventEmitter();

//Register a listener
//'messageLogged' : name of the event 
emitter.on('messageLogged', function(){
    console.log('Listener called');
});

//Raise an event 
//emit means signalling that an event is happened
emitter.emit('messageLogged')    //' messageLogged' name of the event'

//The order of emit and register listener are important
//Because emit iterates aver all the regiqtered listeners and calls them synchronously