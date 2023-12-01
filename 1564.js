const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')


while(lines.length > 0)
{
    var value = parseInt(lines.shift());

    if (value.toString() === `NaN`)
    {
        break;   
    }
    else{
        if (value <= 0)
        {
            console.log("vai ter copa!"); 
        }
        else
        {
            console.log("vai ter duas!");
        }
    }
}