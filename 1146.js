const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

let x = Number(lines.shift())
let j = 1
let res = ""

while(j <= x ){
    if( x === 0 ){
        break
    }else{
        if(j === x){
            res += (j.toString() + "\n")
            j=0
            x = Number(lines.shift())
        }else{
            res += j.toString() + " "
        }
    }
    j++
}
console.log(res.replace(/\n$/, ""));