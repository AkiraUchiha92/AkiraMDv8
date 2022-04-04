const similarity = require('similarity')
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*tbhint/i.test(m.quoted.contentText)) return !0
    this.tebakbendera = this.tebakbendera ? this.tebakbendera : {}
    if (!(id in this.tebakbendera)) return m.reply('Soal itu telah berakhir')
    if (m.quoted.id == this.tebakbendera[id][0].id) {
        let json = JSON.parse(JSON.stringify(this.tebakbendera[id][1]))
        if (['.tbhint', 'Bantuan', ''].includes(m.text)) return !0
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            db.data.users[m.sender].exp += this.tebakbendera[id][2]
            await this.sendButton(m.chat, `*Benar!* +${this.tebakbendera[id][2]} XP`, '© ᴹᴿ᭄ AkiraOfcོ', 'Tebak Bendera', '.tebakbendera', m)
            clearTimeout(this.tebakbendera[id][3])
            delete this.tebakbendera[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) m.reply(`Dikit Lagi!`)
        else m.reply(`Salah!`)
    }
    return !0
}

module.exports = handler