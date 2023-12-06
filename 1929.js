const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')
const values = lines.shift().split(" ").map(Number)

let a = values.shift()
let b = values.shift()
let c = values.shift()
let d = values.shift()

if ((a + b > c && a + c > b && b + c > a) ||
      (a + b > d && a + d > b && b + d > a) ||
      (a + c > d && a + d > c && c + d > a) ||
      (b + c > d && b + d > c && c + d > b)) {
    console.log("S")
  } else {
    console.log("N")
  }