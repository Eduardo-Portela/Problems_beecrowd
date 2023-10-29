const path = require('path')
const currentFile = path.dirname(process.argv[1])

let input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
let lines = input.split('\r\n')

let value = Number(lines.shift());

if (value >= 0 && value <= 25.0000)
{
    console.log("Intervalo [0,25]");
}
else if(value >= 25.00001  && value <= 50.0000000)
{
    console.log("Intervalo (25,50]");
}
else if(value >= 50.0000001  && value <= 75.0000000)
{
    console.log("Intervalo (50,75]");

}else if(value >= 75.0000001  && value <= 100.0000000)
{
    console.log("Intervalo (75,100]");
}
else
{
    console.log("Fora de intervalo");
}
   