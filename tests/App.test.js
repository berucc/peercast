import { mount } from '@vue/test-utils'
import App from '../src/App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '../src/router/routes'

it('should render a heading', () => {
	const router = createRouter({ history: createWebHistory(), routes })
	const wrapper = mount(App, {
		global: {
			plugins: [router],
		},
	})
	expect(wrapper.find('h1').text()).toBe('Hello World!')
})
