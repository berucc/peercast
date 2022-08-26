import express from 'express'
import type { Feedback } from '../domain/feedback'

const app = express()

const feedback: Feedback[] = []

app.get('/api/users', function (req, res) {
	res.send([{ email: 'eins@arbi.de' }, { email: 'zwei@arbi.de' }])
})

app.get('/api/feedback', function (req, res) {
	res.send([{ author: 'eins@arbi.de', text: 'Lorem ipsum' }])
})

app.post('/api/feedback', function (req, res) {
	req.body
	res.status(200).send()
})

app.listen(3001)
