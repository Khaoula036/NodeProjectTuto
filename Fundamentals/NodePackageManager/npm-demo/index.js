var _ = require('underscore'); 

//When we use require Node considerate : 
// 1 : Core module      IF NOT ->2
// 2 : File or folder   IF NOT ->3
// 3 : exist in node_modules 

const result=  _.contains([1, 2, 3], 3);
console.log(result);