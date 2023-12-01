const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

let ordem

let matriz = [[]]


while(true) {
    ordem = Number(lines.shift())

    if (ordem == 0) {
        break
    }
    
    //gerar os valores que serao utilizados como linhas
    for (let linha = 0; linha < ordem; linha++){
        let colunas = []
        //gerar os valores que serao utilizados como colunas
        for(let coluna = 0; coluna < ordem; coluna++){
            colunas[coluna] = identificarValorCelula(linha, coluna)
        }

        matriz[linha] = colunas
    }

    let maiorValor = matriz[ordem - 1][ordem - 1].toString().length

    for (let linha = 0; linha < ordem; linha++) {
        let textoLinha = '';
        for (let coluna = 0; coluna < matriz[linha].length; coluna++) {
            textoLinha += padRight(matriz[linha][coluna].toString(), " ", maiorValor) + ' ';
        }
        console.log(removeEspacoFim(textoLinha));
    }
    console.log();
} 


function identificarValorCelula(linha, coluna){
    return Math.pow(2, linha + coluna)
}

function padRight(str, caractere, qtde){
    let comprimentoTexto = strLength(str)
    let complemento = abs(comprimentoTexto - qtde)

    let novoStr = ""

    for(let i = 0; i < complemento; i++){
        novoStr += caractere
    }

    novoStr += str

    return novoStr
}

function strLength(str){
    let qtde

    let cont = 0
    while(str[cont] != undefined){
        cont++
    }

    return cont

}

function abs(valor){
    if (valor < 0) {
        return (valor * -1)
    } else {
        return valor
    }
}

function pow(base, expoente) {
    let acumulador = 1

    for(let i = 0; i < expoente; i++){
        acumulador = acumulador * base
    }

    return acumulador

}

function removeEspacoFim(str) {
    let i
    for(i = (strLength(str) - 1); i > 0; i--){
        if (str[i] != " ") {
            break
        }
    }

    let texto = ""

    for(let indice = 0; indice <= i; indice++){
        texto += str[indice]
    }

    return texto

}