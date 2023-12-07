const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

const cases = Number(lines.shift())
const values = lines.shift().split(" ").map(Number)
const arrMultiply = [2, 3, 4, 5]
let count = 0

arrMultiply.forEach((number) => {
    values.forEach((element) => {
        if(element % number === 0){
            count++
        }
    })
    console.log(`${count} Multiplo(s) de ${number}`)
    count =0
})