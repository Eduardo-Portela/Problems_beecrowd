var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let prompt = function(texto) { return lines.shift(); };
	
	let testes = parseInt(prompt("nmr de testes"));
	let pontosjoao = 0;
	let pontosmaria = 0;
	let somajoao = 0;
	let somamaria = 0;
	let z;
	let j;
	let i;

for(z = 0; z < testes ; z++){
		for( i = 0 ; i <3 ; i++){
		var x = prompt(" ");
			var [a,b] = x.split(' ');
			a = parseInt(a);
			b = parseInt(b);
			pontosjoao = a*b;
			somajoao += pontosjoao;

		}
		for( j = 0 ; j <3 ; j++){
		var k = prompt(" ");
			var [c,d] = k.split(' ');
			c = parseInt(c);
			d = parseInt(d);
			pontosmaria = c*d;
			somamaria += pontosmaria;
		}

	if(somajoao > somamaria){
		console.log("JOAO");
			somamaria = 0;
			somajoao = 0;
	} else{
		console.log("MARIA");
			somamaria = 0;
			somajoao = 0;
	  }
	
}