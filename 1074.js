const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

const values = lines.map(Number)
const quant = values.shift()

for(let i= 0; i < quant; i++){
    if(values[i] === 0){
        console.log("NULL")
    }

    if(values[i]% 2 === 0 && values[i]>0){
        console.log("EVEN POSITIVE")
    }

    if(values[i]% 2 !== 0 && values[i]>0){
        console.log("ODD POSITIVE")
    }

    if(values[i]% 2 === 0 && values[i]<0){
        console.log("EVEN NEGATIVE")
    }

    if(values[i]% 2 !== 0 && values[i]<0){
        console.log("ODD NEGATIVE")
    }
}