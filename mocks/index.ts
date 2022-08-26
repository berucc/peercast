import express from 'express'
import { Feedback } from '../domain/feedback'
import * as bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const feedback: Feedback[] = []

app.get('/api/users', function (req, res) {
	res.send([{ email: 'eins@arbi.de' }, { email: 'zwei@arbi.de' }])
})

app.get('/api/feedback', function (req, res) {
	res.send(feedback)
})

app.post('/api/feedback', function (req, res) {
	const { author, recipient, text } = req.body
	const randomId = (Math.random() + 1).toString(36).substring(7)
	feedback.push(new Feedback(randomId, author, recipient, text))
	res.status(200).send()
})

app.listen(3001)
