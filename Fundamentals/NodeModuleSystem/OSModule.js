
//Getting informaton about Operating System 
// Current operation system
// OS module
// const os = require('os')

const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log('Total Memory:' + totalMemory);

// Template string
// ES6 / ES2015 / ECMAScript 6 

//Console without using concatination in Node with using ``

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);

// Total Memory: 4168548352
// Free Memory: 786124800