import { ISuitOptions, Suit } from '../src/Suit'

describe('suit creation', () => {
	const options: ISuitOptions = {
		symbol: '1',
		value: 1,
		name: 'one',
	}

	const suit = new Suit(options)

	it('suit symbol', () => {
		expect(suit.getSymbol()).toStrictEqual(options.symbol)
	})

	it('suit value', () => {
		expect(suit.getValue()).toStrictEqual(options.value)
	})

	it('suit name', () => {
		expect(suit.getName()).toStrictEqual(options.name)
	})
})
