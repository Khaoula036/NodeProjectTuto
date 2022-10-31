const fs = require('fs');


//fs.=> operation: synchronous or asynchronous
//Node is a single thread so we have to use asynchronous method to serve many clients

//Synchronous form
const files = fs.readdirSync('./');
console.log(files);
//[ '.git', 'app.js', 'Fundamentals', 'logger.js' ]

//Asynchronous Form
//First argument : path , second argument : callback
fs.readdir('./', function(err, files) {
    if (err) console.log('Error', err);
    else console.log('Result', files);
})
//Result [ '.git', 'app.js', 'Fundamentals', 'logger.js' ]

//In order to work with files and directories in Node, first you need to require fs module and use one of the methods 
//And choose asynchronous ones 