const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

const line1 = lines[0].split(' ')
const n1 = Number((line1[0]))
const n2 = Number((line1[1]))
const n3 = Number((line1[2]))
const n4 = Number((line1[3]))
const n5 = Number((lines[1]))

let media = ((n1 * 2) + (n2 * 3) + (n3 * 4) + n4) / 10
let exame = (n5 + media) / 2

if(media >= 7) {
    console.log(`Media: ${media.toFixed(1)}
Aluno aprovado.`)
}else if(media < 5){
    console.log(`Media: ${media.toFixed(1)}
Aluno reprovado.`)
}else if(n5 >= 5){
    console.log(`Media: ${media.toFixed(1)}
Aluno em exame.
Nota do exame: ${n5.toFixed(1)}
Aluno aprovado.
Media final: ${exame.toFixed(1)}`)
}else {
     console.log(`Media: ${media.toFixed(1)}
Aluno em exame.
Nota do exame: ${n5.toFixed(1)}
Aluno reprovado.
Media final: ${exame.toFixed(1)}`)
}
