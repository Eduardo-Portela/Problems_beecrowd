const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

let value = parseFloat(lines.shift());

if (value <= 2000.00)
{
    console.log("Isento");
}
else if (value <= 3000.00)
{
    value -= 2000.00;
    value *= 0.08;
    console.log(`R$ ${value.toFixed(2)}`);
}
else if (value <= 4500.00)
{
    value -= 3000.00;
    value *= 0.18;
    value += (1000 * 0.08);
    console.log(`R$ ${value.toFixed(2)}`);
}
else
{
    value -= 4500.00;
    value *= 0.28;
    value += (1500 * 0.18) + (1000 * 0.08);
    console.log(`R$ ${value.toFixed(2)}`);
}