var fs = require('fs')


// let buffer = fs.readFile(process.argv[2]);
// let buffer = '';
// function callback (err, data) { /* ... */ }
fs.readFile(process.argv[2], (err, data) => {
  if (err) throw err;
  // console.log(data);
  let buffer = data;
  var string = buffer.toString();


  let array = string.split(/\r?\n/);


  console.log(array.length - 1);
});
