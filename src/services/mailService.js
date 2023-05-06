import nodemailer from 'nodemailer'

export class MailService { 
	constructor() {
		const transporter = nodemailer.createTransport({
			service: `${process.env.SMTP_SERVICE}`,
			auth: {
				user: 'chemodank0th@gmail.com',
				pass: 'dubkufqjgwubefwk'
			}
		})

		this.transporter = transporter
	}

	sendEmail(target) {
		const params = {
			from: `${process.env.SENDER_NAME} <${process.env.SMTP_USER}>`,
			to: target,
			subject: `${process.env.MAIL_SUBJECT}`,
			text: `${process.env.MAIL_CONTENT}`,
			html: `${process.env.MAIL_HTML ?? ''}`, 
		}

		this.transporter.sendMail(params)
	}
}