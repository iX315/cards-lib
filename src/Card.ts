import { IRank, Rank } from './Rank'
import { ISuit, Suit } from './Suit'
import { Base, IBase, IBaseOptions } from './Base'
import chalk from 'chalk'

export interface ICard extends IBase {
	rank: IRank
	suit: ISuit
	color: string
	value: number
}

export interface ICardOptions extends IBaseOptions {
	rank: Rank
	suit: Suit
	color?: string
	value?: number
}

export class Card extends Base {
	rank: Rank
	suit: Suit
	color: string
	value: number

	constructor(props: ICardOptions) {
		super(props)
		this.rank = props.rank
		this.suit = props.suit
		this.color = props.color ?? ''
		this.value = props.value ?? props.rank.getValue()
	}

	output() {
		let string = `${this.rank.getSymbol()} ${this.suit.getSymbol()}`
		return chalk.keyword(this.color)(string)
	}
}
