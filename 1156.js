

let value = 0;
let j = 1;

for (let i = 1; i <= 39; i += 2)
{
    value += Number(i / j);
    j *= 2
    
}

console.log(`${value.toFixed(2)}`);