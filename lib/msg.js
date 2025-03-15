const { proto, downloadContentFromMessage, getContentType } = require('@whiskeysockets/baileys')
const fs = require('fs')

const downloadMediaMessage = async(m, filename) => {
	if (m.type === 'viewOnceMessage') {
		m.type = m.msg.type
	}
	if (m.type === 'imageMessage') {
		var nameJpg = filename ? filename + '.jpg' : 'undefined.jpg'
		const stream = await downloadContentFromMessage(m.msg, 'image')
		let buffer = Buffer.from([])
		for await (const chunk of stream) {
			buffer = Buffer.concat([buffer, chunk])
		}
		fs.writeFileSync(nameJpg, buffer)
		return fs.readFileSync(nameJpg)
	} else if (m.type === 'videoMessage') {
		var nameMp4 = filename ? filename + '.mp4' : 'undefined.mp4'
		const stream = await downloadContentFromMessage(m.msg, 'video')
		let buffer = Buffer.from([])
		for await (const chunk of stream) {
			buffer = Buffer.concat([buffer, chunk])
		}
		fs.writeFileSync(nameMp4, buffer)
		return fs.readFileSync(nameMp4)
	} else if (m.type === 'audioMessage') {
		var nameMp3 = filename ? filename + '.mp3' : 'undefined.mp3'
		const stream = await downloadContentFromMessage(m.msg, 'audio')
		let buffer = Buffer.from([])
		for await (const chunk of stream) {
			buffer = Buffer.concat([buffer, chunk])
		}
		fs.writeFileSync(nameMp3, buffer)
		return fs.readFileSync(nameMp3)
	} else if (m.type === 'stickerMessage') {
		var nameWebp = filename ? filename + '.webp' : 'undefined.webp'
		const stream = await downloadContentFromMessage(m.msg, 'sticker')
		let buffer = Buffer.from([])
		for await (const chunk of stream) {
			buffer = Buffer.concat([buffer, chunk])
		}
		fs.writeFileSync(nameWebp, buffer)
		return fs.readFileSync(nameWebp)
	} else if (m.type === 'documentMessage') {
		var ext = m.msg.fileName.split('.')[1].toLowerCase().replace('jpeg', 'jpg').replace('png', 'jpg').replace('m4a', 'mp3')
		var nameDoc = filename ? filename + '.' + ext : 'undefined.' + ext
		const stream = await downloadContentFromMessage(m.msg, 'document')
		let buffer = Buffer.from([])
		for await (const chunk of stream) {
			buffer = Buffer.concat([buffer, chunk])
		}
		fs.writeFileSync(nameDoc, buffer)
		return fs.readFileSync(nameDoc)
	}
}

const sms = (conn, m) => {
	if (m.key) {
		m.id = m.key.id
		m.chat = m.key.remoteJid
		m.fromMe = m.key.fromMe
		m.isGroup = m.chat.endsWith('@g.us')
		m.sender = m.fromMe ? conn.user.id.split(':')[0]+'@s.whatsapp.net' : m.isGroup ? m.key.participant : m.key.remoteJid
	}
	if (m.message) {
		m.type = getContentType(m.message)
		m.msg = (m.type === 'viewOnceMessage') ? m.message[m.type].message[getContentType(m.message[m.type].message)] : m.message[m.type]
		if (m.msg) {
			if (m.type === 'viewOnceMessage') {
				m.msg.type = getContentType(m.message[m.type].message)
			}
			var quotedMention = m.msg.contextInfo != null ? m.msg.contextInfo.participant : ''
			var tagMention = m.msg.contextInfo != null ? m.msg.contextInfo.mentionedJid : []
			var mention = typeof(tagMention) == 'string' ? [tagMention] : tagMention
			mention != undefined ? mention.push(quotedMention) : []
			m.mentionUser = mention != undefined ? mention.filter(x => x) : []
			m.body = (m.type === 'conversation') ? m.msg : (m.type === 'extendedTextMessage') ? m.msg.text : (m.type == 'imageMessage') && m.msg.caption ? m.msg.caption : (m.type == 'videoMessage') && m.msg.caption ? m.msg.caption : (m.type == 'templateButtonReplyMessage') && m.msg.selectedId ? m.msg.selectedId : (m.type == 'buttonsResponseMessage') && m.msg.selectedButtonId ? m.msg.selectedButtonId : ''
			m.quoted = m.msg.contextInfo != undefined ? m.msg.contextInfo.quotedMessage : null
			if (m.quoted) {
				m.quoted.type = getContentType(m.quoted)
				m.quoted.id = m.msg.contextInfo.stanzaId
				m.quoted.sender = m.msg.contextInfo.participant
				m.quoted.fromMe = m.quoted.sender.split('@')[0].includes(conn.user.id.split(':')[0])
				m.quoted.msg = (m.quoted.type === 'viewOnceMessage') ? m.quoted[m.quoted.type].message[getContentType(m.quoted[m.quoted.type].message)] : m.quoted[m.quoted.type]
				if (m.quoted.type === 'viewOnceMessage') {
					m.quoted.msg.type = getContentType(m.quoted[m.quoted.type].message)
				}
				var quoted_quotedMention = m.quoted.msg.contextInfo != null ? m.quoted.msg.contextInfo.participant : ''
				var quoted_tagMention = m.quoted.msg.contextInfo != null ? m.quoted.msg.contextInfo.mentionedJid : []
			const { proto, downloadContentFromMessage, getContentType } = require('@whiskeysockets/baileys')
const fs = require('fs')

const downloadMediaMessage = async(m, filename) => {
	if (m.type === 'viewOnceMessage') {
		m.type = m.msg.type
	}
	if (m.type === 'imageMessage') {
		var nameJpg = filename ? filename + '.jpg' : 'undefined.jpg'
		const stream = await downloadContentFromMessage(m.msg, 'image')
		let buffer = Buffer.from([])
		for await (const chunk of stream) {
			buffer = Buffer.concat([buffer, chunk])
		}
		fs.writeFileSync(nameJpg, buffer)
		return fs.readFileSync(nameJpg)
	} else if (m.type === 'videoMessage') {
		var nameMp4 = filename ? filename + '.mp4' : 'undefined.mp4'
		const stream = await downloadContentFromMessage(m.msg, 'video')
		let buffer = Buffer.from([])
		for await (const chunk of stream) {
			buffer = Buffer.concat([buffer, chunk])
		}
		fs.writeFileSync(nameMp4, buffer)
		return fs.readFileSync(nameMp4)
	} else if (m.type === 'audioMessage') {
		var nameMp3 = filename ? filename + '.mp3' : 'undefined.mp3'
