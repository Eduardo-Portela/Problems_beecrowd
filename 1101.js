const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

let line1 = 0
let line2 = 0
let sum = 0
let arr = []

for(let i = 0; i < lines.length; i++){
    let line = lines[i].split(" ")
    line.sort((a, b) =>  a - b)
    line1 = line.shift()
    line2 = line.shift()
    if(Number(line1) <= 0 ){
        break
    }
    
    for(let j = Number(line1); j <= line2; j++){
            arr.push(j)
            sum += j
    }
    console.log(`${arr.join(" ")} Sum=${sum}`)
    arr = []
    sum = 0
}