const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

let matriz = new Array(12);

for (let i = 0; i < 12; i++)
{
    matriz[i] = new Array(12);
}

let soma = 0;

let type = lines.shift();

for (let i = 0; i < 12; i++)
{
    for (let j = 0; j < 12; j++)
    {
        matriz[i][j] = parseFloat(lines.shift());
    }
}
let aux = 1
for (let i = 11; i > 0 ; i--)
{
    for (let j = aux; j < 12; j++)
    {
        soma += matriz[i][j]; 
    }
    aux++
}


if (type == "S")
{
    console.log(`${soma.toFixed(1)}`);
}
else if (type == "M")
{
    let result = (soma/66.0);
    console.log(`${result.toFixed(1)}`);
}