const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

const word = "LIFE IS NOT A PROBLEM TO BE SOLVED"
let newWord = ""
let value = Number(lines.shift())
for(let i = 0; i < value; i++){
    newWord += word[i]
}

console.log(newWord)