const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

const cases = lines.shift()

let b = 0
let a = 0
let m = 0
let d = 0

for(let i = 0; i < cases; i++){
    const [name, role, hours] = lines.shift().split(" ")
    let newHour = Number(hours)

    if( role === "bonecos"){
        b += newHour
    }else if( role === "arquitetos"){
        a += newHour
    }else if( role === "musicos"){
        m += newHour
    }else if( role === "desenhistas"){
        d += newHour
    }
}
a = parseInt(a/4)
b = parseInt(b/8)
d = parseInt(d/12)
m = parseInt(m/6)
let total = a+b+d+m
console.log(total)