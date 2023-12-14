const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

var num = lines.shift();

if (num.includes("13")) 
{
    console.log(`${num} es de Mala Suerte`);
}
else 
{
    console.log(`${num} NO es de Mala Suerte`);
}