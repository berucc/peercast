import { config, flushPromises, mount } from '@vue/test-utils'
import App from '@/App.vue'
import { createRouter } from '@/router'
import { createPinia } from 'pinia'
import { stubGetFeedback } from './helpers/stubs'
import { loginPlugin } from './helpers/plugins'
import axios from 'axios'
import { EMAIL, EMAIL_2 } from './helpers/constants'

jest.mock('axios')

it('should show list of peers that sent feedback', async () => {
	stubGetFeedback([EMAIL, EMAIL_2])
	const wrapper = await createWrapper()
	await flushPromises()
	await wrapper.login()
	const feedbackList = wrapper.find('[data-label=feedback-list]')
	const feedback = feedbackList.findAll('[data-label=feedback]')
	expect(feedback).toHaveLength(2)
	expect(feedback[0].text()).toContain(EMAIL)
	expect(feedback[0].find(`a[href="/feedback?email=${EMAIL}"]`).exists()).toBe(
		true
	)
	expect(feedback[1].text()).toContain(EMAIL_2)
	expect(
		feedback[1].find(`a[href="/feedback?email=${EMAIL_2}"]`).exists()
	).toBe(true)
	expect(axios.get).toHaveBeenCalledWith('/api/feedback')
})

it('should show message if no feedback is available', async () => {
	stubGetFeedback([])
	const wrapper = await createWrapper()
	await flushPromises()
	await wrapper.login()
	expect(wrapper.find('[data-label=feedback-list]').exists()).toBe(false)
	expect(wrapper.text()).toContain('Sorry, you have no feedback yet.')
})

async function createWrapper() {
	const router = createRouter()
	config.plugins.VueWrapper.install(loginPlugin)
	const wrapper = mount(App, {
		global: {
			plugins: [createPinia(), router],
			stubs: {
				WelcomeUserList: true,
			},
		},
	})
	await router.push('/')
	return wrapper
}
