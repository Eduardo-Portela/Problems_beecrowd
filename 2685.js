const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

let values = lines.filter(line => line.trim() !== "");

for(let i = 0; i < values.length; i++){
    currentValue = values[i]

    if(currentValue >= 0 && currentValue <= 360){
    const result = currentValue >= 0 && currentValue < 90 ? "Bom Dia!!"
    : currentValue < 180 ? "Boa Tarde!!" : currentValue < 270 ? "Boa Noite!!"
    : currentValue < 360 ? "De Madrugada!!": currentValue == 360 ? "Bom Dia!!":""
    console.log(result)
    }
}