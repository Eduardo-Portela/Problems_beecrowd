var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let V = 0
let D = 0
let R = 0
let area = 0
let altura = 0
    	
while (lines.length > 0) {
  
    V = parseFloat(lines.shift());
    D = parseFloat(lines.shift());
    R = D / 2;
    area = ((3.14 * R) * R);
    altura = V / area;
    
    console.log(`ALTURA = ${altura.toFixed(2)}`);
    console.log(`AREA = ${area.toFixed(2)}`);
}