import { ICardsFactoryOptions } from '../Game'

export const Single: ICardsFactoryOptions = {
	cards: [
		{
			color: 'blue',
			value: 100,
			rank: {
				symbol: '100',
				value: 100,
			},
			suit: {
				symbol: '*',
				value: 100,
			},
		},
	],
}