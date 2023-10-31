const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

let cases = Number(lines.shift())
let num = 0 
let total = 0
let rats = 0
let frogs = 0
let rabbits= 0
let letter = ""
for (let i = 0; i < cases; i++){
    let line = lines.shift().split(" ")
    num = Number(line.shift())
    letter = line.shift() 
    letter === "C" ? rabbits += num : letter === "S" ? frogs +=num : letter === "R" ? rats +=num : ""
    total += num
}

console.log(`Total: ${total} cobaias
Total de coelhos: ${rabbits}
Total de ratos: ${rats}
Total de sapos: ${frogs}
Percentual de coelhos: ${((rabbits / total) * 100).toFixed(2)} %
Percentual de ratos: ${((rats / total) * 100).toFixed(2)} %
Percentual de sapos: ${((frogs / total) * 100).toFixed(2)} %`)