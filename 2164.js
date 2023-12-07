const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

const value = lines.shift()


let result = ((Math.pow(((1 + Math.sqrt(5))/2),value) - Math.pow(((1 - Math.sqrt(5))/2),value)) / (Math.sqrt(5)));

console.log(`${result.toFixed(1)}`);