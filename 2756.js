const line = (space ,char, middleLength,length) => {
    console.log(space.repeat(length) + char + space.repeat(middleLength) + char)
}

console.log(" ".repeat(7) + "A")
line(" ", "B", 1, 6)
line(" ", "C", 3, 5)
line(" ", "D", 5, 4)
line(" ", "E", 7, 3)
line(" ", "D", 5, 4)
line(" ", "C", 3, 5)
line(" ", "B", 1, 6)
console.log(" ".repeat(7) + "A")