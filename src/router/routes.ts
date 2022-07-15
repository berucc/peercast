import HomeView from '@/views/HomeView.vue'
import WelcomeView from '@/views/WelcomeView.vue'

export const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
	},
	{
		path: '/welcome',
		name: 'welcome',
		component: WelcomeView,
		meta: {
			requiresLogin: true,
		},
	},
]
