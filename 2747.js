const line = (char, length) => {
    console.log(char.repeat(length))
}

const cols = (length) => {
    console.log("|" + " ".repeat(length) + "|")
    
}

line("-", 39)
cols(37)
cols(37)
cols(37)
cols(37)
cols(37)
line("-", 39)