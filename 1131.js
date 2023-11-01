const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

let line1 = 0
let line2 = 0
let inter = 0
let gremio = 0
let empate = 0
let countGrenais = 0
let sim = 0
do{
    let lines2 = lines.shift().split(" ")
    line1 = Number(lines2.shift())
    line2 = Number(lines2.shift())

    if(line1 > line2){
        inter++
        countGrenais++
    }else if(line2 > line1){
        gremio++
        countGrenais++
    }else{
        empate++
        countGrenais++
    }
    
    console.log("Novo grenal (1-sim 2-nao)")
    sim = Number(lines.shift())

}while(sim === 1)

if (inter > gremio)
{
    console.log(`${countGrenais} grenais`);
    console.log(`Inter:${inter}`);
    console.log(`Gremio:${gremio}`);
    console.log(`Empates:${empate}`);
    console.log(`Inter venceu mais`);

}else if (gremio > inter)
{
    console.log(`${countGrenais} grenais`);
    console.log(`Inter:${inter}`);
    console.log(`Gremio:${gremio}`);
    console.log(`Empates:${empate}`);
    console.log(`Gremio venceu mais`);

}else
{
    console.log(`${countGrenais} grenais`);
    console.log(`Inter:${inter}`);
    console.log(`Gremio:${gremio}`);
    console.log(`Empates:${empate}`);
    console.log(`Nao houve vencedor`);
}