const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

const [human, elf, lMan ,orcs, wargs, falcon] = lines.shift().split(" ").map(Number)

const goodSide = human + elf + lMan + falcon
const badSide = orcs + wargs

const result = goodSide > badSide ? "Middle-earth is safe." : "Sauron has returned."

console.log(result)