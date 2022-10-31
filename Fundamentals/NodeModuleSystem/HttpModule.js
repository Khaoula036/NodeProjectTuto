//HTTP that we use for creating networking applications

const { Socket } = require('dgram');
const http = require('http');

// //Create a web server
// const server = http.createServer();
// //this server is an EventEmitter

// //Register a listener with an arrow function (=>)
// server.on('connection', (Socket) => {
//     console.log('New connection');
// });

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World'); //write in the page
        res.end();
    }

    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3]))   //write an aarray, json.stringify will convert this array into a string using json syntax 
                                               //and then  we'll write it to tha response 
    
                                            }
});

//Before listening we should register a listener
server.listen(3000);

console.log('Listening on port 3000...')