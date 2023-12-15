const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

let value = lines.shift().trim();
let count = 0;

for(let i = 0; i < value.length; i++){
    if(value[i] == 1){
        count++;
    }
}

if(count % 2 != 0){
    console.log(value + 1);
}
else{
    console.log(value + 0);
}
