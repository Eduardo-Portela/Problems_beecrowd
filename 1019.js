const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

let value = Number(lines.shift())

let countH = 0
let countM = 0
let countS = 0

while(value > 0){
    if(value >= 60) {
        countM += 1
        value -= 60
    } else if(countM >=60){
        countH += 1
        countM -=60
    }else{
        countS = value
        value-=countS
    }
}

console.log(`${countH} : ${countM} : ${countS}`)