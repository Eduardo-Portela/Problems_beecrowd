const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

const [a, b, c] = lines.shift().split(" ").map(Number)

if((a + b === c) || (a + c === b) || (b + c === a)
||  (a === b) || (c === b) || (c === a) ){
    console.log("S")
}else{
    console.log("N")
}

