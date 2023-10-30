const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

const [palavra1, palavra2, palavra3] = lines

if(palavra1 == "vertebrado"){
    if(palavra2 == "ave"){
        if(palavra3 == "carnivoro"){
            console.log("aguia")
        }else{
            console.log("pomba")
        }
    }else if(palavra2 == "mamifero"){
        if(palavra3 == "onivoro"){
            console.log("homem")
        }else{
            console.log("vaca")
        }
    }
}else if(palavra1 == "invertebrado"){
    if(palavra2 == "inseto"){
        if(palavra3 == "hematofago"){
            console.log("pulga")
        }else{
            console.log("lagarta")
        }
    }else if(palavra2 == "anelideo"){
        if(palavra3 == "hematofago"){
            console.log("sanguessuga")
        }else{
            console.log("minhoca")
        }
    }
}