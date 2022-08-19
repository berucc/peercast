const express = require('express')
const app = express()

app.get('/api/users', function (req, res) {
	res.send([{ email: 'eins@arbi.de' }, { email: 'zwei@arbi.de' }])
})

app.post('/api/feedback/:email', function (req, res) {
	res.status(200).send()
})

app.listen(3001)
