var methods = require('./methods');
console.log('sfas'); // this prints data on conosole.
console.log(methods.add(2,3));
console.log(methods.add); // [Function : add]
console.log(methods.add()); //NaN
process.argv[2] = 6;
process.argv[3] = 2;
console.log(process.argv); // process is a global object in node js
//console.log(process);
var args = process.argv.slice(2);
console.log(typeof(args[0]));
console.log(methods.multiply(args[0],args[1]));
