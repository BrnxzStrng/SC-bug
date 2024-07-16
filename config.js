const fs = require('fs')
const chalk = require('chalk')

// ganti info bot dibawah ini
global.botName = "BRANXZ-CRASH"
global.ownerName = "BRANXZ"
global.ownerBot = "6281386936315"
global.ownerNumber = ["6281386936315"] 

global.Auto_Typing = false // auto typing
global.Auto_Recording = false // auto recording
global.Auto_ReadPesan = false // auto read messages

global.key_plta = "-" // Isi Apikey Plta Lu
global.key_pltc = "-" // Isi Apikey Pltc Lu
global.nama_host = "BRANXZ" // Ganti Nama Store Atau nama Host Lu
global.locID = '1'
global.eggID = '15'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})