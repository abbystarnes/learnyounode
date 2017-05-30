var fs = require('fs')

let buffer = fs.readFileSync(process.argv[2]);

var string = buffer.toString();

// let array = string.match(/[^\s]+/g);
let array = string.split(/\r?\n/);
// console.log(array);
// array.splice((array.length - 1), 1);

console.log(array.length - 1);
