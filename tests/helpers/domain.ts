import { User } from '../../domain/user'
import { Feedback } from '../../domain/feedback'

export function USER(email: string) {
	return new User(email)
}

export function FEEDBACK(author: string, recipient = 'recipient') {
	const randomId = (Math.random() + 1).toString(36).substring(7)
	return new Feedback(randomId, author, recipient, 'Lorem ipsum')
}
