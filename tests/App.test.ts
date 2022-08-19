import { config, flushPromises, mount } from '@vue/test-utils'
import App from '@/App.vue'
import { createPinia } from 'pinia'
import { createRouter } from '@/router'
import { loginPlugin } from './helpers/plugins'

it('should show an info text if username was not entered', async () => {
	const wrapper = await createWrapper()
	expect(wrapper.find('[data-label=info-text]').exists()).toBe(false)
	await wrapper.find('[data-label=login-button]').trigger('click')
	expect(wrapper.find('[data-label=info-text]').exists()).toBe(true)
})

it('should show welcome screen after successful login', async () => {
	const wrapper = await createWrapper()
	await wrapper.login()
	expect(wrapper.find('[data-label=greeting]').text()).toContain('Hi, anyname')
})

it('should redirect to home if user directly access welcome page without login', async () => {
	const wrapper = await createWrapper('/welcome')
	await flushPromises()
	expect(wrapper.find('[data-label=login-button]').exists()).toBe(true)
})

async function createWrapper(initialRoute = '/') {
	const router = createRouter()
	config.plugins.VueWrapper.install(loginPlugin)
	const wrapper = mount(App, {
		global: {
			plugins: [router, createPinia()],
		},
	})
	await router.push(initialRoute)
	return wrapper
}
