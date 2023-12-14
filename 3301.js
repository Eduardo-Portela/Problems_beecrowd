const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

const [h,z,l] = lines.shift().split(" ").map(Number)

if(h > z && h < l || h < z && h > l)
{
    console.log("huguinho");
}
else if(h < z && z < l || h > z && l < z )
{
    console.log("zezinho");
}
else if (h > z && l > z || h < z && h < l)
{
    console.log("luisinho");
}