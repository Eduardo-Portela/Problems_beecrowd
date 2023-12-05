const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

let cases = parseInt(lines.shift());
let p1
let p2

for (let i = 1; i <= cases; i++)
{
    let ln = lines.shift().split(" ");

    p1 = ln.shift().replace("\r", "");
    p2 = ln.shift().replace("\r", "");

    if((p1 === "tesoura" && p2 === "papel")||(p1 === "papel" && p2 === "pedra") 
    || (p1 === "pedra" && p2 === "lagarto") || (p1 === "lagarto" && p2 === "Spock")
    || (p1 === "Spock" && p2 === "tesoura") || (p1 === "tesoura" && p2 === "lagarto")
    || (p1 === "lagarto" && p2 === "papel") || (p1 === "papel" && p2 === "Spock")
    || (p1 === "Spock" && p2 === "pedra") || (p1 === "pedra" && p2 === "tesoura")){

        console.log(`Caso #${i}: Bazinga!`);          
            
    }else if(p1 === p2){
        
        console.log(`Caso #${i}: De novo!`);
            
    }else{
        
        console.log(`Caso #${i}: Raj trapaceou!`);
    }     
}