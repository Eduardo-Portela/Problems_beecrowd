const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

const values = lines.map(Number)
const quant = values.shift()
let countIn = 0
let countOut = 0

for(let i =0; i < quant; i++){
    if(values[i] >=10 && values[i] <= 20){
        countIn++
    }else{
        countOut++
    }
}

console.log(`${countIn} in
${countOut} out`)