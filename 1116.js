const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

const cases = Number(lines.shift())
let line1 = 0
let line2 = 0

for(let i = 0; i < cases; i++){
    let line = lines[i].split(" ")
    line1 = Number(line.shift())
    line2 = Number(line.shift())
    if(line2 != 0){
        console.log((line1/line2).toFixed(1))
    }else{
        console.log("divisao impossivel")
    }
}