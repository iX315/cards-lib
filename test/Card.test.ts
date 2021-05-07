import { Card } from '../src/Card'
import { IRankOptions, Rank } from '../src/Rank'
import { ISuitOptions, Suit } from '../src/Suit'

describe('card creation', () => {
	const suitOptions: ISuitOptions = {
		symbol: '1',
		value: 1,
		name: 'one',
	}

	const suit = new Suit(suitOptions)

	const rankOptions: IRankOptions = {
		symbol: '1',
		value: 1,
		name: 'one',
	}
	const rank = new Rank(rankOptions)

	const card = new Card({
		rank,
		suit,
	})

	it('suit symbol', () => {
		expect(card.suit.getSymbol()).toStrictEqual(suitOptions.symbol)
	})
	it('suit name', () => {
		expect(card.suit.getName()).toStrictEqual(suitOptions.name)
	})
	it('suit value', () => {
		expect(card.suit.getValue()).toStrictEqual(suitOptions.value)
	})

	it('rank symbol', () => {
		expect(card.rank.getSymbol()).toStrictEqual(rankOptions.symbol)
	})
	it('rank name', () => {
		expect(card.rank.getName()).toStrictEqual(rankOptions.name)
	})
	it('rank value', () => {
		expect(card.rank.getValue()).toStrictEqual(rankOptions.value)
	})
})
