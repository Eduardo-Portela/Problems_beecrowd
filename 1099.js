const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

const cases = Number(lines.shift())
let line1 = 0
let line2 = 0
let sum = 0

for(let i = 0; i < cases; i++){
    let line = lines[i].split(" ")
    line.sort((a, b) =>  a - b)
    line1 = line.shift()
    line2 = line.shift()

    for(let j = Number(line1) +1; j < line2; j++){
        if(j % 2 !== 0){
            sum += j
        }
    }
    console.log(sum)
    sum = 0
}
