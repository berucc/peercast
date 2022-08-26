import { when } from 'jest-when'
import axios from 'axios'
import { USER } from './domain'
import type { Feedback } from '../../domain/feedback'

export function stubGetUsers(emails: string[]) {
	const data = emails.map((email) => USER(email))
	when(axios.get).calledWith('/api/users').mockResolvedValueOnce({ data })
}

export function stubGetFeedback(feedback: Feedback[]) {
	when(axios.get)
		.calledWith('/api/feedback')
		.mockResolvedValueOnce({ data: feedback })
}

export function stubPostFeedback() {
	when(axios.post)
		.calledWith('/api/feedback', expect.anything())
		.mockResolvedValueOnce({})
}
