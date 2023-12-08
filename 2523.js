const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

let cases = lines.length / 3
let result = ""
for(let i = 0; i < cases; i++){
    if(lines.length ===0){
        break
    }

    let alpha = lines.shift()
    let numberOfLetter = Number(lines.shift())
    let indexLine = lines.shift()
    let indexLetter
    if (alpha !== undefined && numberOfLetter !== undefined && indexLine !== undefined) {
        indexLetter  = indexLine.split(" ").map(Number)
    }else{
        break
    }

    for(let j = 0; j < numberOfLetter; j++){
        result += alpha[indexLetter[j] != 0 ? indexLetter[j]-1 : indexLetter[j]]
    }

    console.log(result)
    result = ""
}