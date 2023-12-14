const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

const [A,B,C] = lines.shift().split(" ").map(Number)

const conditions = [
    B < A && C >= B,
    B > A && C > B && (C - B) >= (B - A),
    B < A && C < B && (B - C) < (A - B),
    B === A && C > B
  ];

  let foundCondition = false;

  for (let i = 0; i < conditions.length; i++) {
    if (conditions[i]) {
      console.log(':)');
      foundCondition = true;
      break;
    }
  }

  if(!foundCondition){
    console.log(':(')
  }
