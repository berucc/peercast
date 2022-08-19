import HomeView from '@/views/HomeView.vue'
import WelcomeView from '@/views/WelcomeView.vue'
import FeedbackView from '@/views/FeedbackView.vue'
import FeedbackGiveView from '@/views/FeedbackGiveView.vue'
import FeedbackReadView from '@/views/FeedbackReadView.vue'

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
		children: [
			{
				path: 'give',
				name: 'giveFeedback',
				component: FeedbackGiveView,
			},
			{
				path: 'read',
				name: 'readFeedback',
				component: FeedbackReadView,
			},
		],
	},
]
