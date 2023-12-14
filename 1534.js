const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

var size = Number(lines.shift());

while (size > 0) {

  for (let i = 0; i < size; i++) {
    let line = [];

    for (let n = 0; n < size; n++) {
      let aux = 0;
      if (i == n) {
        aux = 2;
      }
      if (i + n + 1 == size) {
        aux = 1;
      }

      line.push(3 - aux);
    }
    console.log(line.join(""));
  }
  size = Number(lines.shift());
}