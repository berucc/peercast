import { createRouter as _createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/router/routes'
import { useUserStore } from '@/stores/user'

export function createRouter() {
	const router = _createRouter({
		history: createWebHistory(),
		routes,
	})

	router.beforeEach((to) => {
		const userStore = useUserStore()
		if (to.meta.requiresLogin && !userStore.isLoggedIn) {
			return '/'
		}
	})
	return router
}
