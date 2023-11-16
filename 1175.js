const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')


let vetor = new Array(20);

let j=0;

for (let i = 0; i <vetor.length; i++)
{
    vetor[i]=parseInt(lines.shift());
}
        
let rev = new Array(20);

for (let i = 0, k = 19; i < 20; i++, k--) {          
    rev[i]=vetor[k];
}

for(let n of rev)
{ 
    console.log(`N[${j}] = ${n}`);
    j++;
}