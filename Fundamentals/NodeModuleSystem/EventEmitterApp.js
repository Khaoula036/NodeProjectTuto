const EvenEmitter = require('events');

// call the logger function
const Logger = require('./EventEmitterLogger');
//Create an object of Logger
const logger = new Logger();

//Register a listener 
logger.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
})


logger.log('message');

// message
// Listener called { id: 1, url: 'http://' }