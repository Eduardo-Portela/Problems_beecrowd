const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

for (let cases = 1; true; cases++) {
  let number = Number(lines.shift())
  if (isNaN(number) || typeof(number) === "NaN") {
    break;
  }

  let sequence = [0];

  for (let i = 1; i <= number; i++) {
    for (let n = 0; n < i; n++) {
      sequence.push(i);
    }
  }

  if (sequence.length == 1) {
    console.log("Caso " + cases + ": " + sequence.length + " numero");
  } else {
    console.log("Caso " + cases + ": " + sequence.length + " numeros");
  }
  console.log(sequence.join(" "));
  console.log("");
}