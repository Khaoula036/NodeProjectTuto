const path = require('path');

var pathObj = path.parse(__filename);

console.log(pathObj);

// {
//     root: 'C:\\',
//     dir: 'C:\\Users\\pc\\OneDrive\\Bureau\\NodeProject\\NodeProjectTuto\\Fundamentals\\NodeModuleSystem',
//     base: 'PathModule.js',
//     ext: '.js',
//     name: 'PathModule'
//   }