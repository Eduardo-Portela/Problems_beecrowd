const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

const cases = Number(lines.shift())

for(let i = 0; i < cases; i++){
    let values = lines.shift()
    let result = values <= 8000 ? "Inseto!": "Mais de 8000!"
    console.log(result)
}