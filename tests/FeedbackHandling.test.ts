import { config, flushPromises, mount } from '@vue/test-utils'
import App from '@/App.vue'
import { createRouter } from '@/router'
import { createPinia } from 'pinia'
import { stubGetUsers } from './helpers/stubs'
import { loginPlugin } from './helpers/plugins'

jest.mock('axios')

it('should show list of peers that sent feedback', async () => {
	stubGetUsers([])
	const wrapper = await createWrapper()
	await flushPromises()
	await wrapper.login()
	const feedbackList = wrapper.find('[data-label=feedback-list]')
	const feedback = feedbackList.findAll('[data-label=feedbackß]')
	expect(feedback).toHaveLength(2)
	// expect(feedback[0].text()).toContain(EMAIL)
	// expect(feedback[0].find(`a[href="/feedback?email=${EMAIL}"]`).exists()).toBe(
	// 	true
	// )
	// expect(feedback[1].text()).toContain(EMAIL_2)
	// expect(
	// 	feedback[1].find(`a[href="/feedback?email=${EMAIL_2}"]`).exists()
	// ).toBe(true)
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
