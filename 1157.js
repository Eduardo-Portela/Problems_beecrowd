const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

let value = lines.shift()

for(let i = 0; i <= value; i++){
    if(value % i === 0){
        console.log(i)
    }
}