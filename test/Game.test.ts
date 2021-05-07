import { Game } from '../src/Game'
import { French, Italian, Single } from '../src/Decks'
import { Player } from '../src/Player'
import { Stack } from '../src/Stack'

describe('new game [french cards]', () => {
	const game = new Game()
	let mainStack: Stack

	it('cards creation', () => {
		mainStack = game.cardsFactory(French)

		expect(mainStack.cardsCount()).toEqual(54)
	})

	let player: Player

	it('player creation', () => {
		let name = 'the player'
		player = game.addPlayer({ name })

		expect(player.getName()).toEqual(name)
	})

	it('add stack for player', () => {
		let stack = game.addStackForPlayer(player.getId())

		expect(stack.getOwner()).toStrictEqual(player)
	})

	let playerStack: Stack

	it('add stack for player', () => {
		playerStack = game.addStackForPlayer(player.getId())

		expect(playerStack.getOwner()).toStrictEqual(player)
	})

	it("add cards to player's stack", () => {
		let amount = 10
		game.serveCards(mainStack, playerStack, amount)

		expect(playerStack.cardsCount()).toStrictEqual(amount)
	})

	it('shuffle all', () => {
		let mainStack = game.getStackByIndex(0)

		// don't use reference...
		let cloned_id = Object.assign({}, mainStack?.getCard()?.getId())

		game.shuffleAllCards()

		expect(cloned_id).not.toEqual(mainStack?.getCard()?.getId())
	})
})

describe('new game [italian cards]', () => {
	const game = new Game()

	it('cards creation', () => {
		let stack = game.cardsFactory(Italian)

		expect(stack.cardsCount()).toEqual(40)
	})
})

describe('new game [single cards]', () => {
	const game = new Game()

	it('cards creation', () => {
		let stack = game.cardsFactory(Single)

		expect(stack.cardsCount()).toEqual(1)
	})
})
