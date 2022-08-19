import HomeView from '@/views/HomeView.vue'
import WelcomeView from '@/views/WelcomeView.vue'
import FeedbackView from '@/views/FeedbackView.vue'

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
	{
		path: '/feedback',
		name: 'feedback',
		component: FeedbackView,
		meta: {
			requiresLogin: true,
		},
	},
]
