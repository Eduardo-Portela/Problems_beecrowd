const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')


// let ordem
 let value
// let matriz = [[]]
let matriz = new Array(value);

//para cada valor enviado pelo beecrowd 
//construa a matriz

while(true) {
    value = Number(lines.shift())

    if (value == 0) {
        break
    }


    for (let i = 0; i < value; i++)
    {
        matriz[i] = new Array(value);
    }
    console.log(matriz)


























    
    // //gerar os valores que serao utilizados como linhas
    // for (let linha = 0; linha < ordem; linha++){
    //     let colunas = []
    //     //gerar os valores que serao utilizados como colunas
    //     for(let coluna = 0; coluna < ordem; coluna++){
    //         colunas[coluna] = identificarValorCelula(linha, coluna)
    //     }

    //     matriz[linha] = colunas
    // }

    // for (let i = 0; i < ordem; i++) {
    //     let linha = '';
    //     for (let j = 0; j < matriz[i].length; j++) {
    //         linha += matriz[i][j].toString().padStart(3, ' ') + ' ';
    //     }
    //     console.log(linha.trimRight());
    // }
    // console.log();
} 


// function identificarValorCelula(linha, coluna){
//     return Math.abs(linha - coluna) + 1
// }