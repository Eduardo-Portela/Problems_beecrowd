const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

const values = lines[0].split(' ').map(Number)

const [a , b] = values

if(a == 0 && b == 0){
    console.log("Origem");   
}else if(a == 0){               
    console.log("Eiao b");   
}else if(b == 0){       
    console.log("Eiao a");
}else if(a > 0 && b > 0){  
    console.log("Q1");  
}else if(a < 0 && b > 0){
    console.log("Q2");
}else if(a < 0 && b < 0){
    console.log("Q3");     
}else if(a > 0 && b < 0){
    console.log("Q4");     
}