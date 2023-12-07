const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

const testCases = lines.shift()

for(let i = 0; i < testCases; i++){
    let [hour, min, ocurrence] = lines.shift().split(" ").map(Number)

    const formattedHour = (hour < 10) ? `0${hour}` : hour;
    const formattedMin = (min < 10) ? `0${min}` : min;

    const status = (ocurrence === 1) ? "A porta abriu!" : "A porta fechou!";

    console.log(`${formattedHour}:${formattedMin} - ${status}`);
}