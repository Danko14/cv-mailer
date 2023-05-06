import { MailService } from './services/mailService.js'

import createServer from './http/server.js'
import { mailControllersFactory } from './http/controllers/mail.js'

const mailService = new MailService()

const mailControllers = mailControllersFactory(mailService)

const controllers = {
	mailControllers
}

const server = createServer(controllers)

server.listen(process.env.PORT ?? 80, process.env.HOST ?? '0.0.0.0', () => {
	console.log(`listening ${process.env.PORT}`)
} )
