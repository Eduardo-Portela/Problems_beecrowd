const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

let type = lines.shift()
let currentValue = 0
let matriz = []
let lins = 12
let cols = 12


do {
    
    for(let i = 0; i < lins; i++){
        const newLine = []
        
        for(let j = 0; j < cols; j++){
            currentValue = parseFloat(lines.shift())
            newLine.push(currentValue)
        }
        matriz.push(newLine)
    }

}while(lines.length != 0)

let soma = 0
let media = 0


for(let i = 0; i < matriz.length; i++){

    for(let j = 0; j < i; j++){
        // console.log(matriz[j][i])
            soma += parseFloat(matriz[j][i])
        
    }
}

media = soma / 66.0

type === "S" ? console.log(soma.toFixed(1)) : console.log(media.toFixed(1))


// while(j < 11){
//     j++
//     if(type === "S"){
//         soma += matriz[i][j]
//     }else{
//         soma += matriz[i][j]
//     }
// }
// count++
// j = count

// let x = new Array(12);

// for (let i = 0; i < 12; i++)
// {
//     x[i] = new Array(12);
// }

// let total = 0;

// let tipo = lines.shift();

// for (let i = 0; i < 12; i++)
// {
//     for (let j = 0; j < 12; j++)
//     {
//         x[i][j] = parseFloat(lines.shift());
//     }
// }

// for (let i = 0; i < 12; i++)
// {
//     for (let j = 0; j < i; j++)
//     {
//         console.log(x[j][i])
//         total += x[j][i]; 
//     }
// }


// if (tipo == "S")
// {
//     console.log(`${total.toFixed(1)}`);
// }
// else if (tipo == "M")
// {
//     let result = (total/66.0);
//     console.log(`${result.toFixed(1)}`);
// }