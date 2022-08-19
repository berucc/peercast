import { User } from '../../domain/user'
import { Feedback } from '../../domain/feedback'

export function USER(email: string) {
	return new User(email)
}

export function FEEDBACK(author: string) {
	return new Feedback('Lorem ipsum', author)
}
