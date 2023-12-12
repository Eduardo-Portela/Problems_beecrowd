const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

lines.forEach((element, index) => {
    if(index === 2 || index === 6 || index === 8){
        console.log(element)
    }
})