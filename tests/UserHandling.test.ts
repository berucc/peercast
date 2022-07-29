import { flushPromises, mount } from '@vue/test-utils'
import { createPinia } from 'pinia'
import WelcomeView from '@/views/WelcomeView.vue'
import { verifyAllWhenMocksCalled, when } from 'jest-when'
import axios from 'axios'

jest.mock('axios')

it('should show list of users', async () => {
	when(axios.get)
		.calledWith('/api/users')
		.mockResolvedValueOnce({ data: ['First User', 'Second User'] })
	const wrapper = await createWrapper()
	await flushPromises()
	verifyAllWhenMocksCalled()
	const userList = wrapper.find('[data-label=user-list]')
	const users = userList.findAll('[data-label=user]')
	expect(users).toHaveLength(2)
	expect(users[0].text()).toContain('First User')
	expect(users[1].text()).toContain('Second User')
})

async function createWrapper() {
	return mount(WelcomeView, {
		global: {
			plugins: [createPinia()],
		},
	})
}
