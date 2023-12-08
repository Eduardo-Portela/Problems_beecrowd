const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

const value = Number(lines.shift())

let phrase = "Feliz nat"
for (let i = 0; i < value; i++){
    phrase += "a"
}
phrase += "l!"

console.log(phrase)