const fs = require('fs')
const chalk = require('chalk')
require('dotenv').config();

//contact details
global.ownernumber = [ process.env.OWNER_NUMBER || "254104909141"],
global.ownername = process.env.OWNER_NAME || "Sam Jose",
global.ytname = "YT: SamBotz.inc"
global.socialm = "GitHub: Sam10224"
global.location = "KENYAN"

global.botname = process.env.BOTNAME || 'J.A.R.V.I.S', //name of the bot

//sticker details
global.stickername = process.env.STICKER || 'J.A.R.V.I.S',
global.packname = 'Sticker By'
global.author = process.env.AUTHOR || 'Sam Jose',
//console view/theme
global.themeemoji = '😎'
global.wm = "Sam botz inc."

//theme link
global.link = 'https://whatsapp.com/channel/0029Vab7qNp8kyyKijV1jM3B'

//custom prefix
global.prefa = process.env.PREFIX ||".",

//false=disable and true=enable
global.welcome = true //auto welcome
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti234 = true //auto block +234
global.autoread_status = true //auto view status/story
global.goodbye = true //auto send out goodbye




//reply messages
global.mess = {
    done: '*Done ✓!* \n\n*🚦 Jarvis Bot 🚦*\n\n*😎 Bot link:* \nhttps://github.com/Sam10224/Jarvis\n',
    prem: '*This feature can be used by premium user only*',
    admin: '*ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ɪs ᴏɴʟʏ ғᴏʀ ɢʀᴏᴜᴘ ᴀᴅᴍɪɴ⚠️!*',
    botAdmin: '*ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴍᴇ ᴀᴅᴍɪɴ ʀᴏʟᴇ.❗* ',
    owner: '*ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ɪs ᴏɴʟʏ ғᴏʀ ᴍʏ ᴏᴡɴᴇʀ⚠️*',
    group: '*ᴛʜɪs ғᴇᴀᴛᴜʀᴇ ɪs ᴏɴʟʏ ғᴏʀ ɢʀᴏᴜᴘ❗*',
    private: '*This feature is only for private chats*',
    wait: '*ᴘʀᴏᴄᴇssɪɴɢ ʏᴏᴜʀ ʀᴇᴏ̨ᴜᴇsᴛ✅* ',
    error: '*Uhh,Got an Error*',
}

module.exports = {
    ownernumber: global.ownernumber,
    ownername: global.ownername,
    sessionId: process.env.id,
    AUTO_BLOCK: process.env.PM_BLOCKER,
    ANTI_BOT: "true",
    STATUS_SAVER: "true",
}

global.thumb = fs.readFileSync('./Gallery/thumb.jpg')

let file = require.resolve(__filename)

fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})