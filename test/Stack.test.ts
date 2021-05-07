import { Stack } from '../src/Stack'

describe('stack creation', () => {
	const stack = new Stack()

	it('count cards', () => {
		expect(stack.cardsCount()).toStrictEqual(0)
	})

	it('get owner', () => {
		expect(stack.getOwner()).toBeUndefined()
	})

	it('get name', () => {
		expect(stack.getName()).toStrictEqual('')
	})
})
