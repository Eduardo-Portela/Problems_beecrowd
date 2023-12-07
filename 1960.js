const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

const value = Number(lines.shift())
const decimalValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const romainSimbols = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

const changeValueToRomain = (number) => {
    let result = ""
    for(let i =0; i < decimalValues.length; i++){
        while(number >= decimalValues[i]){
            result +=romainSimbols[i]
            number -= decimalValues[i]
        }
    }
    return result
}

console.log(changeValueToRomain(value))