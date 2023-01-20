var methods = require('./methods');

console.log(process.argv);
var args = process.argv.splice(2);
console.log(methods.add(parseInt(args[0]), parseInt(args[1])));