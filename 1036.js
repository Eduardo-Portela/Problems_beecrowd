const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')


const valores = lines[0].split(' ').map(Number)

const [a, b, c] = valores
let r1, r2

if((a === 0) || (((b*b) - (4*a*c)) < 0)) 
{
    console.log("Impossivel calcular");
}
else
{
    r1 = parseFloat(((-b + Math.sqrt(((b*b) - (4*a*c)))) / (2*a)));
    r2 = parseFloat(((-b - Math.sqrt(((b*b) - (4*a*c)))) / (2*a)));

    console.log(`R1 = ${r1.toFixed(5)}`);
    console.log(`R2 = ${r2.toFixed(5)}`);
}