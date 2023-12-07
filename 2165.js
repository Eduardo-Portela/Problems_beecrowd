const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

const [text] = lines
let count = 0

for(let i = 0; i < text.length; i++){
    count++
}

count <= 140 ? console.log("TWEET") : console.log("MUTE")
