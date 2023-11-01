const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

let value = Number(lines.shift())
let count = 1

for(let i = 1; count <= value; i+=4){
    count++
    console.log(`${i} ${i+1} ${i+2} PUM`)
}


// let i =1
// while(i <= value){
//     console.log(`${i} ${i+1} ${i+2} PUM`)
// i+=4
// }