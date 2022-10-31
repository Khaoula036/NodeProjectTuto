console.log(__filename);
console.log(__dirname);
// Complete Path : C:\Users\pc\OneDrive\Bureau\NodeProject\NodeProjectTuto\logger.js
// Directory : C:\Users\pc\OneDrive\Bureau\NodeProject\NodeProjectTuto

var url = 'http://mylogger.io/log';

function log (message) {
    //send an HTTP request
    console.log(message);
}


//export a single function 
module.exports = log ;

//export an object
// module.exports.log = log ;