const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

let line = parseInt(lines.shift());
let col = parseInt(lines.shift());

var xadrez = new Array(line);

for (let i = 0; i < col; i++)
{
    xadrez[i] = new Array(col);
}

for (let i = 0; i < line; i++)
{
    for (let j = 0; j < col; j++)
    {
        let pos = i + j;
        if (pos % 2 === 0)
        {
            xadrez[j][i] = parseInt(1);
        }
        else
        {
            xadrez[j][i] = parseInt(0);
        }
    }
}

let pos1 = line-1;
let pos2 = col-1;

let result = xadrez[pos2][pos1];

console.log(`${result}`);