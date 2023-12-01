const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

const value = lines.shift()
let result = ""
for(let i = 0; i < value; i++){
    result += "Ho "
}
console.log(`${result.trimRight()}!`)