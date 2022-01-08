import { ICardsFactoryOptions } from '../Game'

export const French: ICardsFactoryOptions = {
	ranks: [
		{ symbol: '1', value: 1 },
		{ symbol: '2', value: 2 },
		{ symbol: '3', value: 3 },
		{ symbol: '4', value: 4 },
		{ symbol: '5', value: 5 },
		{ symbol: '6', value: 6 },
		{ symbol: '7', value: 7 },
		{ symbol: '8', value: 8 },
		{ symbol: '9', value: 9 },
		{ symbol: '10', value: 10 },
		{ symbol: 'J', value: 11 },
		{ symbol: 'Q', value: 12 },
		{ symbol: 'K', value: 13 },
	],
	suits: [
		{ symbol: '♥', value: 1 },
		{ symbol: '♦', value: 2 },
		{ symbol: '♣', value: 3 },
		{ symbol: '♠', value: 4 },
	],
	colors: ['red', 'red', 'black', 'black'],
	cards: [
		{
			color: 'red',
			value: 0,
			rank: {
				symbol: '',
				value: 0,
			},
			suit: {
				symbol: 'Joker',
				value: 0,
			},
		},
		{
			color: 'black',
			value: 0,
			rank: {
				symbol: '',
				value: 0,
			},
			suit: {
				symbol: 'Joker',
				value: 0,
			},
		},
	],
}