import { config, flushPromises, mount } from '@vue/test-utils'
import App from '@/App.vue'
import axios from 'axios'
import { createRouter } from '@/router'
import { createPinia } from 'pinia'
import { stubGetUsers, stubPostFeedback } from './helpers/stubs'
import { EMAIL } from './helpers/constants'
import { loginPlugin } from './helpers/plugins'

jest.mock('axios')

it('should send feedback', async () => {
	stubGetUsers([EMAIL])
	stubPostFeedback()
	const wrapper = await createWrapper()
	await flushPromises()
	await wrapper.login()
	const user = wrapper.find('[data-label=user-list] [data-label=user]')
	const feedbackButton = user.find(`a[href="/feedback?email=${EMAIL}"]`)
	await feedbackButton.trigger('click')
	await flushPromises()
	expect(wrapper.find('[data-label=feedback-view]').text()).toContain(EMAIL)
	expect(wrapper.find('[data-label=feedback-form]').exists()).toBe(true)
	expect(wrapper.find('[data-label=success-message]').exists()).toBe(false)
	await wrapper.find('[data-label=feedback-input]').setValue('my feedback')
	await wrapper.find('button[data-label=submit]').trigger('click')
	expect(axios.post).toBeCalledWith(`/api/feedback/${EMAIL}`, {
		feedback: 'my feedback',
	})
	expect(wrapper.find('[data-label=feedback-form]').exists()).toBe(false)
	const successMessage = wrapper.find('[data-label=success-message]')
	expect(successMessage.exists()).toBe(true)
	expect(successMessage.text()).toContain('Your feedback was successfully sent')
	expect(successMessage.find('[data-label=go-back]').exists()).toBe(true)
})

async function createWrapper() {
	const router = createRouter()
	config.plugins.VueWrapper.install(loginPlugin)
	const wrapper = mount(App, {
		global: {
			plugins: [createPinia(), router],
			stubs: {
				WelcomeFeedbackList: true,
			},
		},
		attachTo: document.body,
	})
	await router.push('/')
	return wrapper
}
