const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

const [a,b] = lines.map(Number)

const calc = Math.floor(((b / 2) - a))

const result = calc <= 0 ? "Amelia tem todas bolinhas!": `Faltam ${calc} bolinha(s)`
console.log(result)