var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let cases = 0
let case1 = 0 
let case2 = 0 
let case3 = 0 

cases=Number(lines.shift());

let vet = new Array(cases);

for (let i = 0; i < cases; i++)
{
    let line = lines.shift().split(" ");

    case1=Number(line.shift());
    case2=Number(line.shift());
    case3=Number(line.shift());

    vet[i]=parseFloat((case1*2 + case2*3 + case3*5)/10);
}

for (let j of vet)
{
    console.log(`${j.toFixed(1)}`);
}