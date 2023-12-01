const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

let matriz = [[]]

   let valorInicial = 1
   while(valorInicial != 0 ){

    valorInicial = lines.shift()
    if(valorInicial == 0){
        break
    }

    for(let i = 0; i < valorInicial; i++){
        let colunas = []
        for(let j = 0; j < valorInicial; j++){
            colunas[j] = 1
        }
        matriz[i] = colunas
    }

let camadas = parseInt(valorInicial /2)

for(let camada = 1; camada <= camadas; camada++){
    
    for(let linha = camada; linha < (matriz.length - camada); linha++){
        for(let coluna= camada; coluna < (matriz.length - camada); coluna++){
            matriz[linha][coluna] = (camada + 1)
        }    
    }
}

for (let i = 0; i < matriz.length; i++) {
    let linhaFormatada = matriz[i].map(valor => valor.toString().padStart(3, ' ')).join(" ").trimRight();
    console.log(linhaFormatada);
}
console.log()
}

