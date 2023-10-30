var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let l1 = lines.shift().split(" ");
let l2 = lines.shift().split(` : `);
let l3 = lines.shift().split(" ");
let l4 = lines.shift().split(` : `);

let d1, h1, m1, s1, d2, h2, m2, s2; 
let dia;

dia=l1.shift();
d1=Number(l1.shift());

h1=Number(l2.shift());
m1=Number(l2.shift());
s1=Number(l2.shift());

dia=l3.shift();
d2=Number(l3.shift());

h2=Number(l4.shift());
m2=Number(l4.shift());
s2=Number(l4.shift());

s1 = s2 - s1;
m1 = m2 - m1;
h1 = h2 - h1;
d1 = d2 - d1;

if (s1 < 0 ) 
{
    s1 += 60 ;
    m1--;
}

if (m1 < 0 ) 
{
    m1 += 60 ;
    h1--;
}

if (h1 < 0 ) 
{
    h1 += 24 ;
    d1--;
}

console.log(`${d1} dia(s)`);
console.log(`${h1} hora(s)`);
console.log(`${m1} minuto(s)`);
console.log(`${s1} segundo(s)`);