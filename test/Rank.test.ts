import { Rank, IRankOptions } from '../src/Rank'

describe('rank creation', () => {
	const options: IRankOptions = {
		symbol: '1',
		value: 1,
		name: 'one',
	}
	const rank = new Rank(options)

	it('rank symbol', () => {
		expect(rank.getSymbol()).toStrictEqual(options.symbol)
	})

	it('rank value', () => {
		expect(rank.getValue()).toStrictEqual(options.value)
	})

	it('rank name', () => {
		expect(rank.getName()).toStrictEqual(options.name)
	})
})
