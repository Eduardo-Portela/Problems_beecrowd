const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

// const values = lines.map(Number)
// const value1 = Math.min(...values)
// const value2 = Math.max(...values)

// let sum = 0

// for(let i = value1 + 1; i < value2; i++){
//     if(i % 2 !== 0){
//         sum += i
//     }
// }
// console.log(parseInt(sum))


let value1 =0;
let value2 =0
let res =0

value1=Number(lines.shift());
value2=Number(lines.shift());

if(value1 == value2)
{
    res=0;

}
else if(value1 < value2)
{
    for(value1= value1+1; value1 < value2; value1++){
        
        if(value1%2==1||value1%2==-1)
        res+=value1;
    }

}
else if(value1 > value2)
{
    for(value2= value2+1; value2 < value1; value2++){
        
        if(value2%2==1||value2%2==-1)
        res+=value2;
    }

} 

console.log(res); 