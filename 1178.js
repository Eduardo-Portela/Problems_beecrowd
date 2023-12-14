const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

let value = Number(lines.shift()).toFixed(4)
let arr = []
let i = 0

do{
    arr.push(value)
    // let formattedValue = value.toLocaleString('en-US', { minimumFractionDigits: 4, useGrouping: false });
    // let newValue = Math.floor(value * Math.pow(10, 4)) / Math.pow(10, 4)
    console.log(`N[${i}] = ${Number(value).toFixed(4)}`)
    let result = Number(value).toFixed(4)
    value = (result /2)
    i++
}while(arr.length != 100)
