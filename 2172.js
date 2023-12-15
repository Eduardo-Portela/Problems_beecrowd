const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

let [mob, xp] = lines.shift().split(" ")

while(true){
    if(mob == 0 && xp ==0 ){
        break
    }else{
        const result = mob *xp
        console.log(result)
    }

    [mob, xp] = lines.shift().split(" ")
}