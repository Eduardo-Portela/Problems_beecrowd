const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

let values = lines.shift().split(".")
let finalValues = values[values.length -1]
values.pop()
let valuesSplited = finalValues.split("-")
values.push(...valuesSplited)

for(let i = 0; i < values.length; i++){
    console.log(values[i])

}