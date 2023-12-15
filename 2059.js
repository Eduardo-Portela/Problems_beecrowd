const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

const values = lines.shift().split(" ").map(Number)
let soma = 0
let parimpar = 0

const p = values[0];
const j1 = values[1];
const j2 = values[2];
const r = values[3];
const a = values[4];
soma = j1 + j2

if (soma %2 == 0){
		parimpar = 0; 
	}else{
		parimpar = 1; 
	}

if (p == 1 && parimpar == 0 && r ==0 && a==0){
		console.log("Jogador 1 ganha!");
	}else if (p == 0 && parimpar == 1 && r ==0 && a ==0 ){ 
		console.log("Jogador 1 ganha!");
	}else if (r ==1 && a ==0){
		console.log("Jogador 1 ganha!");
	}else if (r == 1 && a == 1){
		console.log("Jogador 2 ganha!");
	}else if (p==1 && parimpar == 1 && r ==0 && a==0){
		console.log("Jogador 2 ganha!");
	}else if (p==0 && parimpar ==0 && r ==0 && a==0){
	    console.log("Jogador 2 ganha!");
	}else if (r ==0 && a ==1){
		console.log("Jogador 1 ganha!");
	}