console.log(); //global : we can acces from anywhere

//Global Objects in jvascript belong to the window object
setTimeout(); //used to call a function after a delay : seconds...
clearTimeout();

setInterval();  // used to repeatedly call a function after a given delay
clearInterval(); //used to stop function from being called repeatedly

// window : represent a our global scope , so all the variables and functons that are defined globally we can access them via this window object
// window.console.log() OR console.log()

//When we declare a variable, it is slso available via the window object 
var message= '';

//In Node we don't have this window object, instead
//We have another object called global 
//All functions there we acces them via the global object
// global.steTimeout
//But : variables that are defined are not added to the globel object
//They are only a scope to this file, so they are not available outside of this file
//And this is because Node's modular system 