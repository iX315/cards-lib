import { Card } from './Card'
import { Group } from './Group'
import { Player } from './Player'
import { Base, IBase, IBaseOptions } from './Base'
import { shuffle } from 'd3-array'

export enum StackDirection {
	Up = 'UP',
	Down = 'DOWN',
}

export interface IStack extends IBase {
	owner: Player
	group: Group
	cards: Card[]
	direction: StackDirection
}

export interface IStackOptions extends IBaseOptions {
	owner?: Player
	group?: Group
	cards?: Card[]
	direction?: StackDirection
}

export class Stack extends Base {
	protected owner: Player | undefined
	protected group: Group | undefined
	protected cards: Card[]
	protected direction: StackDirection

	constructor(props: IStackOptions = {}) {
		super(props)
		this.owner = props.owner
		this.group = props.group
		this.cards = props.cards || []
		this.direction = props.direction || StackDirection.Up
	}

	addCards(cards: Card[]) {
		this.cards = [...this.cards, ...cards]
		return this
	}

	addCard(card: Card) {
		this.cards.push(card)
		return this
	}

	getCard(index: number = 0) {
		return this.cards[index]
	}

	getCards() {
		return this.cards
	}

	shuffle() {
		shuffle(this.cards)
		return this
	}

	takeFirstCard() {
		return this.cards.shift()
	}

	takeLastCard() {
		return this.cards.pop()
	}

	takeCard(index: number = 0) {
		return this.cards.splice(index, 1)[0]
	}

	takeCards(index: number = 0, count = 1) {
		return this.cards.splice(index, count)
	}

	getOwner() {
		return this.owner
	}

	setOwner(player: Player) {
		this.owner = player
		return this
	}

	cardsCount() {
		return this.cards.length
	}

    output() {
        let owner = this.getOwner() ? this.getOwner()?.output() : ''
        return `${owner}\n${this.getName()}: ${this.outputCards()}`
	}

	outputCards() {
		if (this.direction == StackDirection.Up) {
			return this.cards.map(card => card.output()).join('\n')
		}
		return '#'
	}
}
