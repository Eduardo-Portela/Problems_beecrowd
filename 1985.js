const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

const cases = Number(lines.shift())
let  number = 0
let  quant = 0
let  result = 0

const arrCod = [1001, 1002, 1003, 1004, 1005]
const arrValue = [1.50, 2.50, 3.50, 4.50, 5.50]

for(let i = 0; i < cases; i++){
    const values = lines.shift().split(" ").map(Number)

    number = values.shift()
    quant = values.shift()

    for(let j =0; j < arrCod.length; j++){
        if(number === arrCod[j]){
            result += arrValue[j] * quant
        }

    }


}
console.log(result.toFixed(2))
