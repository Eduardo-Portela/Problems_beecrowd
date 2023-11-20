const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')


let n1=0, n2=1, n3=0;
let x=parseInt(lines.shift());

let vet = new Array(61);
let vety = new Array(x);

for (let i = 0; i < x; i++)
{
    vety[i]=parseInt(lines.shift());
}
    
for (let j = 1; j < 61; j++)
{
    n1=n2;
    n2=n3;
    n3=n1+n2;
    vet[j]=n3;
}
vet[0]=0;
for (let m = 0; m < x;) {

    for (let k = 0; k < 61; k++) {

        if(vety[m] == k){
            let strLong = vet[k];
            console.log(`Fib(${vety[m]}) = ${strLong}`);
        }    
    }
    m++;  
}