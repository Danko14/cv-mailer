import http from 'http'
import Url from 'url'

const requestHandlerFactory = ({ mailControllers }) => (req,res) => {
	const { url } = req
	const { path } = Url.parse(url)
	switch (path) {
	case '/send-email':
		mailControllers.sendEmail(req, res)
		break
  
	default:
		res.writeHead(404).end('Not found')
		break
	}
} 

function createServer(controllers) {
	const server = http.createServer(requestHandlerFactory(controllers))

	return server
}

export default createServer