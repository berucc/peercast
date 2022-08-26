import { User } from '../../domain/user'
import { Feedback } from '../../domain/feedback'

export function USER(email: string) {
	return new User(email)
}

export function FEEDBACK(author: string, recipient = 'recipient') {
	return new Feedback(author, recipient, 'Lorem ipsum')
}
