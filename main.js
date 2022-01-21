const {
WAConnection,
MessageType,
Presence,
Mimetype,
GroupSettingChange
} = require('@adiwajshing/baileys')
const fs = require('fs')
const { banner, start, success } = require('./lib/functions')
const { color } = require('./lib/color')
const moment = require("moment-timezone")
require('./index.js')
nocache('./index.js', module => console.log(`${module} Telah Di Update✓`))
const starts = async (Lexxy = new WAConnection()) => {
Lexxy.logger.level = 'warn'
Lexxy.version = [2, 2143, 8]
Lexxy.browserDescription = ["Lexxy Official", "safari", "windows 10"];
console.log(banner.string)
Lexxy.on('qr', () => {
console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan bang'))})
fs.existsSync('./session.json') && Lexxy.loadAuthInfo('./session.json')
Lexxy.on('connecting', () => {
start('2', 'Connecting...')})
Lexxy.on('open', () => {
success('2', 'Connected')})
await Lexxy.connect({timeoutMs: 30*1000})
fs.writeFileSync('./session.json', JSON.stringify(Lexxy.base64EncodedAuthInfo(), null, '\t'))
//WELCOME
Lexxy.on('group-participants-update', async (anu) => {
try {
    mem = anu.participants[0]
    console.log(anu)
mem = anu.participants[0]
console.log(anu)
try {
pp_user = await Lexxy.getProfilePicture(mem)
} catch (e) {
pp_user = "https://telegra.ph/file/c9dfa715c26518201f478.jpg"
}
try {
pp_grup = await Lexxy.getProfilePicture(anu.jid)
} catch (e) {
pp_grup =
"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
}
if (anu.action == "add" && mem.includes(Lexxy.user.jid)) {
Lexxy.sendMessage(anu.jid, " 𝐇𝐚𝐢 𝐒𝐚𝐲𝐚 𝐀𝐤𝐚𝐧 𝐌𝐞𝐦𝐛𝐚𝐧𝐭𝐮 𝐌𝐞𝐦𝐛𝐚𝐧𝐭𝐮 𝐌𝐞𝐦𝐩𝐞𝐫𝐦𝐮𝐝𝐚𝐡 𝐊𝐢𝐧𝐞𝐫𝐣𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐒𝐞𝐩𝐞𝐫𝐭𝐢 𝐌𝐞𝐦𝐛𝐮𝐚𝐭 𝐒𝐭𝐢𝐜𝐤𝐞𝐫 𝐃𝐚𝐧 𝐋𝐚𝐢𝐧 𝐋𝐚𝐢𝐧.", "conversation")
}
      
if (anu.action == 'add') {
mdata = await Lexxy.groupMetadata(anu.jid)
                memeg = mdata.participants.length
            num = anu.participants[0]
                let v = Lexxy.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = v.vname || v.notify || num.split('@')[0]
        timuu = moment.tz('Asia/Jakarta').format('HH:mm:ss')
           let d = new Date
       let locale = 'id'
       let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
     let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
        let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let waktu = d.toLocaleDateString(locale, { hour: 'numeric', minute: 'numeric', second: 'numeric' })
const calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
       })
try {

                pp_user = await Lexxy.getProfilePicture(mem)

                } catch (e) {

                pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'

            }

                try {

                pp_grup = await Lexxy.getProfilePicture(anu.jid)

                } catch (e) {

                pp_grup = 'https://telegra.ph/file/80db32fa0846fd481831d.jpg'

            }
fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;Denz;;;\nFN:Denz\nitem1.TEL;waid=6281337541779:6281337541779\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
var tuy = `*Welcome @${num.split('@')[0]}* 

📛 : _${anu_user}_
🔣 : _@${num.split('@')[0]}_
🥉 : _${memeg} Member (s)_
⏰ : _${timuu} Indonesian time_

\`\`\`Hope you like it and don't forget to read the group description\`\`\``;            
/**sendButImage(anu.jid, tuy, `ʀɪғǫɪʙᴏᴛᴢ`, img,but = [{buttonId:`hallo`, 
buttonText:{displayText: 'WELCOME👋'},type:1}], options = {contextInfo: {mentionedJid: [num, number]},thumbnail: Buffer.alloc(0)})**/

/**Lexxy.sendMessage(`mdata.id`, options, tuy, { quoted: ftrolio })**/
Lexxy.sendMessage(mdata.id, tuy, MessageType.text, {contextInfo: {"mentionedJid": [num]}, quoted: fkontak})

} else if (anu.action == 'remove') {
mdata = await Lexxy.groupMetadata(anu.jid)
                memeg = mdata.participants.length
            num = anu.participants[0]
                let v = Lexxy.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = v.vname || v.notify || num.split('8@')[0]
        timuu = moment.tz('Asia/Jakarta').format('HH:mm:ss')
           let d = new Date
       let locale = 'id'
       let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
     let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
        let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let waktu = d.toLocaleDateString(locale, { hour: 'numeric', minute: 'numeric', second: 'numeric' })
const calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
       })
try {

                pp_user = await Lexxy.getProfilePicture(mem)

                } catch (e) {

                pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'

            }

                try {

                pp_grup = await Lexxy.getProfilePicture(anu.jid)

                } catch (e) {

                pp_grup = 'https://telegra.ph/file/80db32fa0846fd481831d.jpg'

            }
fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;Denz;;;\nFN:Denz\nitem1.TEL;waid=6281337541779:6281337541779\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
var out = `◪ Goodbye @${num.split('@')[0]}
◪ Leave from group:
${mdata.subject}
│
└─ ❏ Nomor: ${num.replace('@s.whatsapp.net', '')}
GoodBye~~`;
/**sendButImage(anu.jid, out, `ʀɪғǫɪʙᴏᴛᴢ`, img,but= [{buttonId: `byebye`, buttonText: {displayText: `GOODBYE🖕`}, type: 1}], options = {contextInfo: {mentionedJid: [num, number]}, thumbnail: Buffer.alloc(0)})**/
Lexxy.sendMessage(mdata.id, out, MessageType.text, {contextInfo: {"mentionedJid": [num]}, quoted: fkontak})
}
} catch (e) {
console.log(e)
}
})
Lexxy.on('chat-update', async (message) => {
require('./index.js')(Lexxy, message)})}
function nocache(module, cb = () => { }) {
console.log('[ ! ]', `'${module}'`, 'DI Pantau Oleh Lexxy Official')
fs.watchFile(require.resolve(module), async () => {
await uncache(require.resolve(module))
cb(module)})}
function uncache(module = '.') {
return new Promise((resolve, reject) => {
try {
delete require.cache[require.resolve(module)]
resolve()
} catch (e) {
reject(e)}})}

starts()