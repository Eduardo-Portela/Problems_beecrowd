const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

const values = lines[0].split(' ').map(Number)

const [a,b,c ] = values.sort((a,b) => {
    return b - a 
})
const verifyTriangle = () => {
    if(a >= (b + c)){
        console.log("NAO FORMA TRIANGULO")
        
    }
    else if(Math.pow(a, 2) == ((Math.pow(b, 2))) + ((Math.pow(c, 2)))){
        console.log("TRIANGULO RETANGULO")
    }
    else if(Math.pow(a,2) > (Math.pow(b, 2) + Math.pow(c,2))){
        console.log("TRIANGULO OBTUSANGULO")
    }
    else if(Math.pow(a, 2) < ((Math.pow(b, 2)) + (Math.pow(c, 2)))){
        console.log("TRIANGULO ACUTANGULO")
    }
    if(a == b && a == c && b == c){
        console.log("TRIANGULO EQUILATERO")
    }
    else if(a == b || b == c || c == a){
        console.log("TRIANGULO ISOSCELES")
    }
}

verifyTriangle()