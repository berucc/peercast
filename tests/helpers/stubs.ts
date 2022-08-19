import { when } from 'jest-when'
import axios from 'axios'
import { USER } from './domain'

export function stubGetUsers(emails: string[]) {
	const data = emails.map((email) => USER(email))
	when(axios.get).calledWith('/api/users').mockResolvedValueOnce({ data })
}

export function stubPostFeedback() {
	when(axios.post)
		.calledWith('/api/feedback/eins@arbi.de', {
			feedback: 'my feedback',
		})
		.mockResolvedValueOnce({})
}
