const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

for(let i = 0; i < lines.length; i++){
    if(i % 2 != 0){
        let arrValues = lines[i].split(' ').map(Number)
        
        let max = Math.max(...arrValues)
        max < 10 ? console.log(1): max >= 10 && max < 20 ? console.log(2) : console.log(3)
    }else{
        let quant = Number(lines[i])

    }
}