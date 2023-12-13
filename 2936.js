const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

let result =0
lines.forEach((element, index) =>{
    result += index == 0 ? Number(element) * 300: index == 1 ? Number(element) * 1500
    : index == 2 ? Number(element) * 600
    : index == 3 ? Number(element) * 1000: Number(element) * 150
})
console.log(result + 225)