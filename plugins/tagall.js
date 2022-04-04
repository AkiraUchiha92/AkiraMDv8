let handler = async (m, {
	conn,
	args,
	participants
}) => {
    let text = args.join` ` || "oi bang!"
	let users = participants.map(u => u.jid)
	conn.reply(m.chat, '*「 TAG ALL 」*\n'+ 'Message:'+ ` *${text}*`+ '\n\n💫 ' + users.map(v => '@' + v.replace(/@.+/, '')).join`\n❖ `, m, {
		contextInfo: {
			mentionedJid: users
		}
	})
}
handler.help = ['tagall']
handler.tags = ['group']
handler.command = /^tagall$/i
handler.group = true
handler.admin = true
handler.botAdmin = false
module.exports = handler