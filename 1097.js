let j = [7,6,5,9,8,7,11,10,9,13,12,11,15,14,13]
let i =1
let count = 0
let x = 0

while(i <= 9){
    if(count === 3){
        i+=2
        count = 0
    }
   
    count++
    if(i > 9){
        break
    }
    console.log(`I=${i} J=${j[x]}`)
    x++
}