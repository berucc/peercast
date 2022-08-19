import { config, flushPromises, mount } from '@vue/test-utils'
import App from '@/App.vue'
import { createRouter } from '@/router'
import { createPinia } from 'pinia'
import { stubGetUsers } from './helpers/stubs'
import { EMAIL, EMAIL_2 } from './helpers/constants'
import { loginPlugin } from './helpers/plugins'

jest.mock('axios')

it('should show list of users', async () => {
	stubGetUsers([EMAIL, EMAIL_2])
	const wrapper = await createWrapper()
	await flushPromises()
	await wrapper.login()
	const userList = wrapper.find('[data-label=user-list]')
	const users = userList.findAll('[data-label=user]')
	expect(users).toHaveLength(2)
	expect(users[0].text()).toContain(EMAIL)
	const giveFeedbackLink1 = users[0].find(
		`a[href="/feedback/give?email=${EMAIL}"]`
	)
	expect(giveFeedbackLink1.exists()).toBe(true)
	expect(giveFeedbackLink1.text()).toContain('give feedback')
	expect(users[1].text()).toContain(EMAIL_2)
	const giveFeedbackLink2 = users[1].find(
		`a[href="/feedback/give?email=${EMAIL_2}"]`
	)
	expect(giveFeedbackLink2.exists()).toBe(true)
	expect(giveFeedbackLink2.text()).toContain('give feedback')
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
	})
	await router.push('/')
	return wrapper
}
