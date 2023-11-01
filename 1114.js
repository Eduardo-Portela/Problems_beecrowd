const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

const values = lines.map(Number)

for(let i = 0; i < values.length; i++){
    if(values[i] === 2002){
        console.log("Acesso Permitido")
        break
    }else{
        console.log("Senha Invalida")
    }
}