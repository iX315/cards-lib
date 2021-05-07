import { Group } from '../src/Group'

describe('group creation', () => {
	const group = new Group()

	it('get name', () => {
		expect(group.getName()).toStrictEqual('')
	})

	it('get members', () => {
		expect(group.getMembers()).toStrictEqual([])
	})
})
