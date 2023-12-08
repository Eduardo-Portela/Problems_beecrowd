const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

let chicken
let pasta
let meat

let avaliable = lines.shift().split(" ").map(Number)
let requests = lines.shift().split(" ").map(Number)
chicken = avaliable[0] - requests[0] 
pasta = avaliable[1] - requests[1] 
meat = avaliable[2] - requests[2]

const arrResult = [chicken, pasta, meat]
let requestsDenied = 0

arrResult.forEach((element) => {
    if(element < 0){
        requestsDenied += element
    }
})

console.log(Math.abs(requestsDenied))

