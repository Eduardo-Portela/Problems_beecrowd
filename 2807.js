const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

const cases = lines.shift()

const fibonacciArray = [1, 1];
let result = ""

for (let i = 2; i < 40; i++) {
  fibonacciArray.push(fibonacciArray[i - 1] + fibonacciArray[i - 2]);
}

for(let j = (fibonacciArray.length - 1); j >= 0 ; j--){
    if(j < cases){
        result += fibonacciArray[j] + " "
    }
    
}
console.log(result.trimRight());
