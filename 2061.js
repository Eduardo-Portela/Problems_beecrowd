const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

const values = lines.shift().split(" ").map(Number)
const initial = values.shift()
const cases = values.shift()
let result = initial

for(let i = 0; i < cases; i++){
    const action = lines.shift()

    action == "fechou" ? result += 1 : result -= 1
   
}

console.log(result)