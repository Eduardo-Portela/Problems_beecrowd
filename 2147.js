const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

const testCases = lines.shift()
let result = 0
for(let i = 0; i < testCases; i++){
    const currentWord = lines.shift()

    for(let j = 0; j < currentWord.length; j++){
        result += 0.01
    }
    console.log(result.toFixed(2))
    result = 0
}