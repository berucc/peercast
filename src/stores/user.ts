import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
	state: () => ({
		username: '',
	}),
	getters: {
		isLoggedIn: (state) => !!state.username,
	},
	actions: {
		setName(name: string) {
			this.username = name
		},
	},
})
