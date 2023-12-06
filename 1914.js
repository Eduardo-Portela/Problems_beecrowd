const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

const cases = Number(lines.shift())
let player1 = ""
let play1 = ""
let player2 = ""
let play2 = ""

for(let i = 0; i< cases; i++){
    let line = lines.shift().split(" ")
    let values = lines.shift().split(" ").map(Number)
    player1 = line.shift()
    play1 = line.shift()
    player2 = line.shift()
    play2 = line.shift()

    const resultGame = values.reduce((initialvalue, currentValue) => {
        return initialvalue + currentValue
    }, 0)

    if(play1 === "PAR" && resultGame % 2 ===0){
        console.log(player1)
    }else if(play1 === "IMPAR" && resultGame % 2 != 0){
        console.log(player1)
    }else {
        console.log(player2)
    }

}