const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')
const cases = lines.length
const arrNotes = [100, 50, 10, 5, 2]
let countNote = 0

for(let i =0; i < cases; i++){
    const values = lines.shift().split(" ").map(Number)
    let price = values.shift()
    let pay = values.shift()
    let result = pay - price
    if(pay === 0  && price === 0){
        break
    }

    for(let j = 0; j < arrNotes.length; j++){
        if(result >= arrNotes[j]){
            countNote++
            result -= arrNotes[j]
        }
    }
    if(countNote == 2 && result ===0){
        console.log("possible")
    }else{
        console.log("impossible")
    }
    countNote = 0
}