let j = 7
let i =1
let count = 0

while(i <= 9){
    if(count === 3){
        i+=2
        j = 7
        count = 0
    }
   
    count++
    if(i > 9){
        break
    }
    console.log(`I=${i} J=${j}`)
    j-=1
}