const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

let  n =parseInt(lines.shift());

for (let i = 0; i < n; i++)
{
    let value=lines.shift().split(" ");
    
    let r1 = 0 
    let r2 = 0
    let result = 0 

    r1 = parseInt(value.shift());
    r2 = parseInt(value.shift());

    result=r1+r2;

    console.log(result);
}