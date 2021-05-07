import { nanoid } from 'nanoid'

export interface IBase {
	id?: string
	name?: string
	createdAt?: Date
	updatedAt?: Date
}

export interface IBaseOptions {
	name?: string | undefined
}

export abstract class Base {
	private id: string
	private name: string
	private createdAt: Date
	private updatedAt: Date

	constructor({ name }: IBaseOptions = {}) {
		this.id = nanoid()
		this.name = name || ''
		this.createdAt = new Date()
		this.updatedAt = new Date()
	}

	getId() {
		return this.id
	}

	getName() {
		return this.name
	}

	setName(name: string) {
		this.name = name
		return this
	}

	getCreationDate() {
		return this.createdAt
	}

	getUpdateDate() {
		return this.updatedAt
	}

	protected update() {
		this.updatedAt = new Date()
	}
}
