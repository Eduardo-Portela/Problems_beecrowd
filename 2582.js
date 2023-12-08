const path = require('path')
const currentFile = path.dirname(process.argv[1])

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8')
var lines = input.split('\r\n')

const cases = Number(lines.shift())

const musics = [
    "PROXYCITY","P.Y.N.G.","DNSUEY!","SERVERS","HOST!","CRIPTONIZE",
    "OFFLINE DAY","SALT","ANSWER!","RAR?","WIFI ANTENNAS"
  ];

  for(let i = 0; i < cases; i++){
    const buttons = lines.shift().split(" ").map(Number)
    const sumButtons = buttons.reduce((initial, current) => initial + current)
    console.log(musics[sumButtons])
  }