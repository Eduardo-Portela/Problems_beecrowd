const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

while (lines.length > 0) {
    let N = Number(lines.shift());

    if (N.toString() === `NaN`)
    {
        break;   
    }
    else
    {
        let aux = log(N);
        console.log(`${aux}`);
    }

}

function log(N) {
    return parseInt((Math.log(N) / Math.log(2)));
}