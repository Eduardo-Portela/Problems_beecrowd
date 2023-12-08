const line = (char, length) => {
    console.log(char.repeat(length))
}

const emptyCols = (length) => {
    console.log("|" + " ".repeat(length) + "|")
    
}

const colsWithChars = (length, char, length2) => {
    console.log("|" + " ".repeat(length) + char + " ".repeat(length2) + "|")
    
}

line("-", 39)

colsWithChars(0, "x = 35", 31)
emptyCols(37)
colsWithChars(15,"x = 35", 16)
emptyCols(37)
colsWithChars(31, "x = 35", 0)
line("-", 39)