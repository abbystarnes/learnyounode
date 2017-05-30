let path = require('path');
let fs = require('fs');
// print list of files in given directory
// filter by extension of files

// argv2 = /path/to/dir/
// arv3 = file extension to filter eg. 'txt'

// print to console, 1 file per line
// use asyn I/O
fs.readdir(process.argv[2], (err, list) => {
  let picked_ext = process.argv[3];
  if (err) throw err;
  let array = [];

  let myList = list;

  for (let x = 0; x < list.length; x++) {
    let ext = path.extname(list[x]);
    if (ext === `.${picked_ext}`) {
      array.push(list[x])
    }
  }

  // console.log(array);
  for (let x = 0; x < array.length; x++) {
    console.log(`${array[x]}`);
  }
  // var string = buffer.toString();


  // let array = string.split(/\r?\n/);


  // console.log(array.length - 1);
});
