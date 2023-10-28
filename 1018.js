const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

let value = Number(lines.shift())
let initialValue = value

let count100 = 0
let count50 = 0
let count20 = 0
let count10 = 0
let count5 = 0
let count2 = 0
let count1 = 0

while(value > 0){

    
    if(value >= 100){

        count100++
        value = value - 100
    }else if(value >= 50){
        count50++
        value = value - 50
    }
    else if(value >= 20){
        count20++
        value = value - 20
    }
    else if(value >= 10){
        count10++
        value = value - 10
    }
    else if(value >= 5){
        count5++
        value = value - 5
    }
    else if(value >= 2){
        count2++
        value = value - 2
    }
    else if(value >= 1){
        count1++
        value = value - 1
    }
}
console.log(`${Number(initialValue)}
${count100} nota(s) de R$ 100,00
${count50} nota(s) de R$ 50,00
${count20} nota(s) de R$ 20,00
${count10} nota(s) de R$ 10,00
${count5} nota(s) de R$ 5,00
${count2} nota(s) de R$ 2,00
${count1} nota(s) de R$ 1,00
`)
