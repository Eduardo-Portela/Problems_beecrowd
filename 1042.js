const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

const values = lines[0].split(' ').map(Number)
const copyValues = [...values]

copyValues.sort( (a,b) => {
    return a - b
})

console.log(`${copyValues[0]}
${copyValues[1]}
${copyValues[2]}

${values[0]}
${values[1]}
${values[2]}`)