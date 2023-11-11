const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

const cases = Number(lines.shift())


let i = 0
let j = 0
let count = 0

while( i < cases){
    let value = Number(lines.shift())

    while(j <= value){
        if(value % j === 0){
            count++
        }
        j++
    }

    if(count === 2){
        console.log(`${value} eh primo`)
    } else{
        console.log(`${value} nao eh primo`)

    }
    j=0
    count = 0
    i++

}