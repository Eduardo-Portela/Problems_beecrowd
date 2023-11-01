var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let x = 0.0
let y = 0.0
let z = 0.0

do{

    let line = lines.shift().split(` `);
    x=parseInt(line.shift());
    y=parseInt(line.shift());

    if(x > z && y > z){

        console.log("primeiro");

    }else if(x < z && y > z){

        console.log("segundo");

    }else if(x < z && y < z){

        console.log("terceiro");

    }else if(x > z && y < z){

        console.log("quarto");
    }

}while(x !== 0 && y !== 0);