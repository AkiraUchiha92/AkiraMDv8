let handler = async m => m.reply(`
╭─「 Donasi 」
│ • Dana [081327327914]
│ • Gopay [081327327914]
│ • Ovo [081327327914]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6281327327914
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
