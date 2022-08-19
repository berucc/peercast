const { verifyAllWhenMocksCalled } = require('jest-when')

global.afterEach(() => {
	verifyAllWhenMocksCalled()
})
