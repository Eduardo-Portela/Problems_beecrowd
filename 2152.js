const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

const testCases = lines.shift()

for(let i = 0; i < testCases; i++){
    const values = lines.shift().split(" ").map(Number)
    let hour = values.shift()
    let min = values.shift()
    let ocurrence = values.shift()
    if(hour < 10){
        hour = "0" + hour
    }
    if(min < 10){
        min = "0" + min
    }

    
    ocurrence === 1 ? console.log(`${hour}:${min} - A porta abriu!`)
    : console.log(`${hour}:${min} - A porta fechou!`)
}