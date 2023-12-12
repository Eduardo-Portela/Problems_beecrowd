const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

const values = lines.shift().split(" ").map(Number)

values.forEach((value,index) => {
    if(value === 1){
        console.log(index + 1)
    }
})