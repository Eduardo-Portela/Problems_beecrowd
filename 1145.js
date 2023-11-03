const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split(' ')

const x = Number(lines.shift())
const y = Number(lines.shift())
let i = 1
let j = 1
let res = ""

do{
    if(j != x){
        j++
        res += (i.toString() + " ")
    }else{
        res += (i.toString() + "\n")  
        j=1
    }
    i++
}while(i <= y);
console.log(res.replace(/\n$/, ""))