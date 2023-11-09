const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')


function calculateYearsToExceed(populationA, populationB, growthRateA, growthRateB) {
    let years = 0;
  
    while (populationA <= populationB) {
      populationA += Math.floor(populationA * (growthRateA / 100));
      populationB += Math.floor(populationB * (growthRateB / 100));
      years++;
  
      if (years > 100) {
        return -1; // Mais de 1 século
      }
    }
  
    return years;
  }
  
  function printResult(years) {
    if (years === -1) {
      console.log("Mais de 1 seculo.");
    } else {
      console.log(years + " anos.");
    }
  }
  
  let numCases = parseInt(lines.shift());
  
  for (let i = 0; i < numCases; i++) {
    let [populationA, populationB, growthRateA, growthRateB] = lines
      .shift()
      .split(" ")
      .map(Number);
  
    let years = calculateYearsToExceed(populationA, populationB, growthRateA, growthRateB);
    printResult(years);
  }