// console.log(process.argv.length);

let sum = 0;

for (let x = 0; x < process.argv.length; x++) {
  if (isNaN(process.argv[x])) {
    // do nothing
  } else {
    sum = sum + parseInt(process.argv[x]);
  }
}

console.log(sum);;
