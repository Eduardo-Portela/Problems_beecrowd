const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

const salary = Number(lines.shift())
let newSalary = 0
let gain = 0
let percent = 0

if(salary > 0 && salary <=400.00) {
    newSalary = salary + (salary * 0.15)
    gain = salary * 0.15
    percent = 15
console.log(`Novo salario: ${newSalary.toFixed(2)}
Reajuste ganho: ${gain.toFixed(2)}
Em percentual: ${percent} %`)
}else if(salary > 400.01 && salary <=800.00) {
    newSalary = salary + (salary * 0.12)
    gain = salary * 0.12
    percent = 12
console.log(`Novo salario: ${newSalary.toFixed(2)}
Reajuste ganho: ${gain.toFixed(2)}
Em percentual: ${percent} %`)
}else if(salary > 800.00 && salary <=1200.00) {
    newSalary = salary + (salary * 0.10)
    gain = salary * 0.10
    percent = 10
console.log(`Novo salario: ${newSalary.toFixed(2)}
Reajuste ganho: ${gain.toFixed(2)}
Em percentual: ${percent} %`)
}else if(salary > 1200.00 && salary <=2000) {
    newSalary = salary + (salary * 0.07)
    gain = salary * 0.07
    percent = 7
console.log(`Novo salario: ${newSalary.toFixed(2)}
Reajuste ganho: ${gain.toFixed(2)}
Em percentual: ${percent} %`)
}else if(salary > 2000) {
    newSalary = salary + (salary * 0.04)
    gain = salary * 0.04
    percent = 4
console.log(`Novo salario: ${newSalary.toFixed(2)}
Reajuste ganho: ${gain.toFixed(2)}
Em percentual: ${percent} %`)
}

