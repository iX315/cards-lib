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

/**
 * Game logic
 */
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

	/**
	 * Add a player to the game
	 * @param props player props
	 * @returns the created player
	 */
	addPlayer(props: IPlayerOptions): Player {
		let player = new Player(props)
		this.players?.push(player)
		this.update()

		return player
	}

	/**
	 * Add a stack to the game
	 * @param props stack props
	 * @returns the created stack
	 */
	addStack(props: IStackOptions = {}): Stack {
		let stack = new Stack(props)
		this.stacks?.push(stack)
		this.update()

		return stack
	}

	/**
	 * Reset all stacks and put all cards into 1 stack
	 * (not ordered)
	 */
	flushStacks(): void {
		const allCards: Card[] = []

		this.stacks.forEach(stack => {
			allCards.push(...stack.getCards())
		})

		this.stacks = [new Stack({ cards: allCards })]
		this.update()
	}

	/**
	 * Initialize a stack with built-in decks
	 * @param props factory props
	 * @returns the created stack
	 */
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

	/**
	 * Get all stacks in the game
	 * @returns returns all stacks
	 */
	getStacks(): Stack[] {
		return this.stacks
	}

	/**
	 * Search a stack by id
	 * @param id stack id
	 * @returns the stack
	 */
	getStackById(id: string): Stack | undefined {
		return this.stacks.find(stack => stack.getId() == id)
	}

	/**
	 * Search a stack by index
	 * @param index stack index
	 * @returns the stack
	 */
	getStackByIndex(index: number): Stack | undefined {
		return this.stacks[index]
	}

	/**
	 * Get all players in the game
	 * @returns returns all players
	 */
	getPlayers(): Player[] {
		return this.players
	}

	/**
	 * Search a player by id
	 * @param id player id
	 * @returns the player
	 */
	getPlayerById(id: string): Player | undefined {
		return this.players.find(player => player.getId() == id)
	}

	/**
	 * Search a player by index
	 * @param index player index
	 * @returns the player
	 */
	getPlayerByIndex(index: number): Player | undefined {
		return this.players[index]
	}

	/**
	 * Search a stack by player id
	 * @param playerId player id
	 * @returns the stack
	 */
	getStacksByPlayer(playerId: string) {
		return this.stacks.map(stack => {
			stack.getOwner()?.getId() === playerId
		})
	}

	/**
	 * Give an existing stack of cards to a player
	 * @param stackId stack id
	 * @param playerId player id
	 * @returns the stack
	 */
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

	/**
	 * Create a stack of cards to a player
	 * @param playerId player id
	 * @returns the stack
	 */
	addStackForPlayer(playerId: string): Stack {
		let stack = this.addStack()

		return this.giveStackToPlayer(stack.getId(), playerId)
	}

	/**
	 * Serve an amount of cards a stack
	 * @param source the source stack 
	 * @param target the target stack to serve
	 * @param amount the amount of cards to serve
	 */
	serveCards(source: Stack, target: Stack, amount: number) {
		let cards = source.takeCards(0, amount)
		target.addCards(cards)
	}

	/**
	 * Shuffle all cards by resetting all stacks
	 */
	shuffleAllCards(): void {
		this.flushStacks()

		this.getStackByIndex(0)?.shuffle()
		this.update()
	}

	/**
	 * Show players information
	 * @returns stringified players output
	 */
	outputPlayers() {
		return this.players.map(player => player.output()).join('\n')
	}

	/**
	 * Show stacks information
	 * @returns stringified stacks output
	 */
	outputStacks() {
		return this.stacks.map(stack => stack.output()).join('\n')
	}
}
