const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

const valores = lines[0].split(' ').map(Number)

const [a, b, c ,d] = valores

if(b > c && d > a && (c + d) > (a + b) && c > 0 && d > 0 && a % 2 == 0){

        console.log("Valores aceitos")

else{
    console.log("Valores nao aceitos")
}

/*var cd=c+d;
var ab=a+b;

if(b > c && d > a && cd > ab && c > 0 && d > 0)
{
    if(a % 2 === 0)
    {
        console.log("Valores aceitos");
    }
    else
    {
        console.log("Valores nao aceitos");
    }     
}
else
{
    console.log("Valores nao aceitos");
}   */