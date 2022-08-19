import { config, flushPromises, mount } from '@vue/test-utils'
import App from '@/App.vue'
import { createRouter } from '@/router'
import { createPinia } from 'pinia'
import { stubGetFeedback, stubGetUsers } from './helpers/stubs'
import { loginPlugin } from './helpers/plugins'
import axios from 'axios'
import { EMAIL } from './helpers/constants'

jest.mock('axios')

it('should show list of peers that sent feedback', async () => {
	stubGetUsers([])
	stubGetFeedback([EMAIL])
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
	expect(axios.get).toHaveBeenCalledTimes(2)
	expect(axios.get).toHaveBeenCalledWith('/api/feedback')
})

async function createWrapper() {
	const router = createRouter()
	config.plugins.VueWrapper.install(loginPlugin)
	const wrapper = mount(App, {
		global: {
			plugins: [createPinia(), router],
		},
	})
	await router.push('/')
	return wrapper
}
