import { when } from 'jest-when'
import axios from 'axios'
import { FEEDBACK, USER } from './domain'

export function stubGetUsers(emails: string[]) {
	const data = emails.map((email) => USER(email))
	when(axios.get).calledWith('/api/users').mockResolvedValueOnce({ data })
}

export function stubGetFeedback(authors: string[]) {
	const data = authors.map((author) => FEEDBACK(author))
	when(axios.get).calledWith('/api/feedback').mockResolvedValueOnce({ data })
}

export function stubPostFeedback() {
	when(axios.post)
		.calledWith('/api/feedback', expect.anything())
		.mockResolvedValueOnce({})
}
