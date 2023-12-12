const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

let cases = 0
let arrayMin = []
let result = 0

do{
    cases = Number(lines.shift())
    if(cases % 1 != 0 || cases == 0){
        break
    }
    for(let i = 0; i < cases; i++){
        const value = Number(lines.shift())
        arrayMin.push(value)
    }
    result = Math.min(...arrayMin)
    console.log(result)
    arrayMin = []
    i=0
}
while(lines.length != 0)
