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
colsWithChars(8, "Roberto", 22)
emptyCols(37)
colsWithChars(8, 5786, 25)
emptyCols(37)
colsWithChars(8, "UNIFEI", 23)
line("-", 39)