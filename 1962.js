const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

const cases = Number(lines.shift())

for(let i = 0; i < cases; i++){
    const value = Number(lines.shift())
    if(value >= 2015){
        console.log(`${value - 2014} A.C.`)
    }
    else if(value < 2015){
        console.log(`${2015 - value} D.C.`)
    }
}