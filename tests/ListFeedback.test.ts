import { config, flushPromises, mount } from '@vue/test-utils'
import App from '@/App.vue'
import { createRouter } from '@/router'
import { createPinia } from 'pinia'
import { stubGetFeedback } from './helpers/stubs'
import { loginPlugin } from './helpers/plugins'
import axios from 'axios'
import { EMAIL, EMAIL_2 } from './helpers/constants'
import { FEEDBACK } from './helpers/domain'

jest.mock('axios')

it('should show list of peers that sent feedback', async () => {
	const feedback1 = FEEDBACK(EMAIL)
	const feedback2 = FEEDBACK(EMAIL_2)
	stubGetFeedback([feedback1, feedback2])
	const wrapper = await createWrapper()
	await flushPromises()
	await wrapper.login()
	const feedbackList = wrapper.find('[data-label=feedback-list]')
	const feedback = feedbackList.findAll('[data-label=feedback]')

	expect(axios.get).toHaveBeenCalledWith('/api/feedback')
	expect(feedback).toHaveLength(2)

	expect(feedback[0].text()).toContain(EMAIL)
	const readLink1 = feedback[0].find(`a[href="/feedback/read/${feedback1.id}"]`)
	expect(readLink1.exists()).toBe(true)
	expect(readLink1.text()).toBe('read feedback')

	expect(feedback[1].text()).toContain(EMAIL_2)
	const readLink2 = feedback[1].find(`a[href="/feedback/read/${feedback2.id}"]`)
	expect(readLink2.exists()).toBe(true)
	expect(readLink2.text()).toContain('read feedback')
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
