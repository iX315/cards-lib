import { Base, IBaseOptions } from './Base'

export interface IPlayerOptions extends IBaseOptions {
	points?: number
}

export class Player extends Base {
	private points: number

	constructor(props: IPlayerOptions = {}) {
		super(props)
		this.points = props.points || 0
	}

	setPoints(points: number) {
		this.points = points
		return this
	}

	getPoints(): number {
		return this.points
	}

    output() {
        return `${this.getName()}: ${this.getPoints()}`
    }
}
