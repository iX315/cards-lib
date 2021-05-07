import { Player } from '../src/Player'

describe('player creation', () => {
	const player = new Player()

	it('get name', () => {
		expect(player.getName()).toStrictEqual('')
	})

	it('get points', () => {
		expect(player.getPoints()).toStrictEqual(0)
	})
})
