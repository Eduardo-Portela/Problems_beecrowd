const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

let line = Number(lines.shift())
let type = lines.shift()
let currentValue = 0
let matriz = []
let lins = 12
let cols = 12


do {
    
    for(let i = 0; i < lins; i++){
        const newLine = []
        
        for(let j = 0; j < cols; j++){
            currentValue = parseFloat(lines.shift())
            newLine.push(currentValue)
        }
        matriz.push(newLine)
    }

}while(lines.length != 0)

let soma = 0
let media = 0
for(let i = 0; i < matriz[line].length; i++){
    if(type === "S"){
        soma += matriz[i][line]
    }else{
        soma += matriz[i][line]
    }
}
media = soma / 12

type === "S" ? console.log(soma.toFixed(1)) : console.log(media.toFixed(1))
