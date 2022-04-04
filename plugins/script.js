let handler  = async (m, { conn, args }) => {
   m.reply(`info SC tanya OWNER : https://bit.ly/AkiraofficialWA`)
}
 
handler.help = ['script']
handler.tags = ['about']
handler.command = /^(script)$/i

module.exports = handler
