const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

const cases = parseInt(lines.shift());

for (let i = 0; i < cases; i++)
{
    let line = lines.shift().split(" ");

    let altura = parseInt(line.shift());
    let diametro = parseInt(line.shift());
    let galhos = parseInt(line.shift());

    if(altura >= 200 && altura <= 300)
    {
        if (diametro >= 50)
        {
            if(galhos > 150)
            {
                console.log("Sim");
            }
            else
            {
                console.log("Nao");
            }
        }
        else
        {
            console.log("Nao");
        }
    }
    else
    {
        console.log("Nao");
    }
}