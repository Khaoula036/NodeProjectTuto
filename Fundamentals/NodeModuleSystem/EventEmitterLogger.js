const EvenEmitter = require('events');

var url = 'http://mylogger.io/log';

//Create a class that have all the capabilities of the EventEmitter
//The first letter of the name of the class should be uppercase
//With 'extends EventEmitter' the class will have all the functionality that is defined in EventEmitter

class Logger extends EvenEmitter {
     log (message) {     //A method 
        //send an HTTP request
        console.log(message);
    
        //Raise an event 
        //this reference to this Logger 
        this.emit('messageLogged', { id: 1, url: 'http://'});
    
    }
}


//export the class 
module.exports = Logger ;

