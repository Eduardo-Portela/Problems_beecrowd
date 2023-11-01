const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

let line1 = 0
let line2 = 0

for(let i = 0; i < lines.length; i++){
    let line = lines[i].split(" ")
    line1 = Number(line.shift())
    line2 = Number(line.shift())
    if(line1 > line2){
        console.log("Decrescente")
    }else if(line1 < line2){
        console.log("Crescente")
    }
}