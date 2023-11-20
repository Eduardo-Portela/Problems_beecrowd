const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')


let m = 1000
let z = 1000;

m = parseInt(lines.shift());

let vet=new Array(m);

for (let i = 0; i < m; i++)
{
    vet[i]=i;
}

for (let v=0, j=0; v < z; v++)
{
    console.log(`N[${v}] = ${vet[j]}`);
    j++;

    if(j == m)
    {
        j=0;
    }
}