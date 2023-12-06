const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

let name = ""
let force = 0
let cases = Number(lines.shift())

for(let i = 0; i < cases; i++){
    let line = lines.shift().split(" ")

    name = line.shift()
    force = line.shift()

    if(name === "Thor"){
        console.log("Y")
    }else{
        console.log("N")
    }
}