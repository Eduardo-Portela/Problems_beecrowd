const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

let cases = lines.shift()

for(let i = 0; i < cases; i++){
    let values = lines[i].split(" ")
    let x = Number(values.shift())
    let y = Number(values.shift())
    let sum = 0
    let count = 0
    
    do{
        if(x % 2 != 0){
            sum += x
            count++
        }
        x++
    }while(count != y)
    console.log(sum)
}