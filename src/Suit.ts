import { Base, IBase, IBaseOptions } from './Base'

export interface ISuit extends IBase {
	symbol: string
	value: number
}

export interface ISuitOptions extends IBaseOptions {
	symbol: string
	value: number
}

export class Suit extends Base {
	private symbol: string
	private value: number

	constructor(props: ISuitOptions) {
		super(props)
		this.symbol = props.symbol
		this.value = props.value
	}

	getSymbol() {
		return this.symbol
	}

	setSymbol(symbol: string) {
		this.symbol = symbol
		return this
	}

	getValue() {
		return this.value
	}

	setValue(value: number) {
		this.value = value
		return this
	}
}
