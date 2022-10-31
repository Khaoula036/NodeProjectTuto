//Export a varaible defined in a module(file) so that we can use it outside that module

console.log(module);
/*
node Modules.js 
Module {
  id: '.',
  path: 'C:\\Users\\pc\\OneDrive\\Bureau\\NodeProject\\NodeProjectTuto',
  exports: {},
  filename: 'C:\\Users\\pc\\OneDrive\\Bureau\\NodeProject\\NodeProjectTuto\\app.js',
  loaded: false,
  children: [],
  paths: [
    'C:\\Users\\pc\\OneDrive\\Bureau\\NodeProject\\NodeProjectTuto\\node_modules',
    'C:\\Users\\pc\\OneDrive\\Bureau\\NodeProject\\node_modules',
    'C:\\Users\\pc\\OneDrive\\Bureau\\node_modules',      
    'C:\\Users\\pc\\OneDrive\\node_modules',
    'C:\\Users\\pc\\node_modules',
    'C:\\Users\\node_modules',
    'C:\\node_modules'
  ]
}
*/

//In Node Every File is a module and the variables and functions 
// defined in this file are scope to taht maodule, they are not available outside of that module 