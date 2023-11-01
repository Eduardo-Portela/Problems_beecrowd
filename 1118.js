const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

let m = 1
let n = 1
let calc = 1

do
{
    do
    {
        m=parseFloat(lines.shift());

        if(m < 0.0 || m > 10.0)
        {
            console.log("nota invalida");
        }
    
    } while (m < 0.0 || m > 10.0);

    do
    {
        n=parseFloat(lines.shift());

        if(n < 0.0 || n > 10.0)
        {
            console.log("nota invalida");
        }

    } while (n < 0.0 || n > 10.0);

    let result = (m + n) / 2;
    console.log(`media = ${result.toFixed(2)}`);

    do
    {
        console.log("novo calculo (1-sim 2-nao)");
        calc=parseInt(lines.shift());
        
    } while (calc != 1 && calc != 2);
    
} while (calc == 1);