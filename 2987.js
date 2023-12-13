const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

let letrasMaiusculas = [];
for (var i = 65; i <= 90; i++) {
  letrasMaiusculas.push(String.fromCharCode(i));
}

letrasMaiusculas.forEach((element, i) => {
    if(lines[0] == element){
        console.log(i+1)
    }
})