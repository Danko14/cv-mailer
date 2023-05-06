export const mailControllersFactory = (mailService) => ({
	async sendEmail(req, res) {
		if (req.method !== 'POST') {
			res.setHeader('Content-Type', 'application/json')
				.writeHead(400)
				.end('Not allowed')
		}
    
		let payload = ''

		req.on('data', function (data) {
			payload += data
		})
    
		req.on('end', () => {
			payload = JSON.parse(payload)
			const { target } = payload

			try {
				mailService.sendEmail(target)
			} catch (error) {
				res.setHeader('Content-Type', 'application/json')
					.writeHead(500)
					.end('Server error')
        
				return
			}
  
			res.setHeader('Content-Type', 'application/json')
				.writeHead(200)
				.end('Successefully sent')
		})
	}
})