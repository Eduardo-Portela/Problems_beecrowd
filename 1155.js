

let value = 1;

for (let i = 2; i <= 100; i++)
{
    value += Number(1/i);
}

console.log(`${value.toFixed(2)}`);