const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

let num_album = 0
let fig_compradas = 0;

num_album = parseInt(lines.shift());
fig_compradas = parseInt(lines.shift());

let figurinhas = new Array(fig_compradas);

for (let i = 0; i < figurinhas.length; i++)
{
    let y = false;
    let id = parseInt(lines.shift());

    for (let x of figurinhas)
    {
        if (x == id)
        {
            y = true;
            break;
        }
    }   

    if(y === false)
    {
        figurinhas[i]=id;
        num_album--;
    }         
}

console.log(`${num_album}`); 