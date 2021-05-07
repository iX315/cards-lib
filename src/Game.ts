import { Base, IBase, IBaseOptions } from './Base'
import { Card, ICard } from './Card'
import { Group } from './Group'
import { IPlayerOptions, Player } from './Player'
import { IRank, Rank } from './Rank'
import { IStackOptions, Stack } from './Stack'
import { ISuit, Suit } from './Suit'

export interface IGame extends IBase {
	players: Player[]
	groups: Group[]
	stacks: Stack[]
}

export interface ICardsFactoryOptions {
	ranks?: IRank[]
	suits?: ISuit[]
	colors?: string[]
	cards?: ICard[]
}

export class Game extends Base {
	protected players: Player[]
	protected groups: Group[]
	protected stacks: Stack[]

	constructor(props: IBaseOptions = {}) {
		super(props)
		this.players = []
		this.groups = []
		this.stacks = []
	}

	addPlayer(props: IPlayerOptions): Player {
		let player = new Player(props)
		this.players?.push(player)
		this.update()

		return player
	}

	addStack(props: IStackOptions = {}): Stack {
		let stack = new Stack(props)
		this.stacks?.push(stack)
		this.update()

		return stack
	}

	flushStacks(): void {
		const allCards: Card[] = []

		this.stacks.forEach(stack => {
			allCards.push(...stack.getCards())
		})

		this.stacks = [new Stack({ cards: allCards })]
		this.update()
	}

	cardsFactory(props: ICardsFactoryOptions): Stack {
		const cards: Card[] = []

		if (props.suits && props.ranks) {
			const suits = props.suits.map(s => new Suit(s))
			const ranks = props.ranks.map(r => new Rank(r))

			suits.forEach((suit, index) => {
				let color = props.colors ? props.colors[index] : ''
				ranks.forEach(rank => {
					cards.push(new Card({ rank, suit, color }))
				})
			})
		}

		if (props.cards) {
			props.cards.forEach(card => {
				cards.push(
					new Card({
						...card,
						rank: new Rank(card.rank),
						suit: new Suit(card.suit),
					})
				)
			})
		}

		let stack = this.addStack({ cards })

		this.update()

		return stack
	}

	getStackById(id: string): Stack | undefined {
		return this.stacks.find(stack => stack.getId() == id)
	}

	getStackByIndex(index: number): Stack | undefined {
		return this.stacks[index]
	}

	getPlayerById(id: string): Player | undefined {
		return this.players.find(player => player.getId() == id)
	}

	getPlayerByIndex(index: number): Player | undefined {
		return this.players[index]
	}

	getStacksByPlayer(playerId: string) {
		return this.stacks.map(stack => {
			stack.getOwner()?.getId() === playerId
		})
	}

	giveStackToPlayer(stackId: string, playerId: string): Stack {
		let stack = this.getStackById(stackId)
		let player = this.getPlayerById(playerId)

		if (!stack) {
			throw new Error('stack not found')
		}

		if (!player) {
			throw new Error('player not found')
		}

		return stack.setOwner(player)
	}

	addStackForPlayer(playerId: string): Stack {
		let stack = this.addStack()

		return this.giveStackToPlayer(stack.getId(), playerId)
	}

	serveCards(source: Stack, target: Stack, amount: number) {
		let cards = source.takeCards(0, amount)
		target.addCards(cards)
	}

	shuffleAllCards(): void {
		this.flushStacks()

		this.getStackByIndex(0)?.shuffle()
		this.update()
	}

	outputPlayers() {
		return this.players.map(player => player.output()).join('\n')
	}

	outputStacks() {
		return this.stacks.map(stack => stack.output()).join('\n')
	}
}
