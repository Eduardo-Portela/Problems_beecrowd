const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

const values = lines.map(Number)

values.forEach((password) => {
    if(password >= 1001 && password <= 9999)
    console.log(password - 1)
})