const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')
const values = lines.shift().split(" ").map(Number)

let saida = values.shift()
let tempo = values.shift()
let fuso = values.shift()

let chegada = saida + tempo + fuso

chegada >= 24 ? chegada = (chegada - 24):  chegada < 0 ? chegada = 24 + chegada : chegada

console.log(chegada)