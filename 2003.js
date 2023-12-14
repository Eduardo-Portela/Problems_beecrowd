const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

let leng = lines.length

for(let i = 0; i < leng; i++){
    const [hour, min] = lines.shift().split(":").map(Number)
    if(hour){
            let minutes = (hour *60) + min
            let start = 8 *60
            let max = minutes + 60
            
            if(max > start){
                console.log(`Atraso maximo: ${max - start}`)
            }else{
                console.log(`Atraso maximo: ${0}`)
            
            }
    }

}

