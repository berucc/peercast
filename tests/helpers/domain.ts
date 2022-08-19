import { User } from '../../domain/user'

export function USER(email: string) {
	return new User(email)
}
