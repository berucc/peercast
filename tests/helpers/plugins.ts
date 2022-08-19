import { flushPromises, VueWrapper } from '@vue/test-utils'

export function loginPlugin(wrapper: VueWrapper) {
	return {
		login: async () => {
			await wrapper.find('[data-label=username]').setValue('anyname')
			await wrapper.find('[data-label=login-button]').trigger('click')
			await flushPromises()
		},
	}
}
