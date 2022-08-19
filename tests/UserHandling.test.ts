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
	expect(users[0].find(`a[href="/feedback?email=${EMAIL}"]`).exists()).toBe(
		true
	)
	expect(users[1].text()).toContain(EMAIL_2)
	expect(users[1].find(`a[href="/feedback?email=${EMAIL_2}"]`).exists()).toBe(
		true
	)
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
