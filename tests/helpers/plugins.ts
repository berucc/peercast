import { flushPromises, VueWrapper } from '@vue/test-utils'

export function loginPlugin(wrapper: VueWrapper) {
	return {
		login: async (username = 'anyname') => {
			await wrapper.find('[data-label=username]').setValue(username)
			await wrapper.find('[data-label=login-button]').trigger('click')
			await flushPromises()
		},
	}
}
