import { Player } from './Player'
import { Base, IBase, IBaseOptions } from './Base'

export interface IGroup extends IBase {
	members: Player[]
}

export interface IGroupOptions extends IBaseOptions {
	members?: Player[]
}

export class Group extends Base {
	private members: Player[]

	constructor(props: IGroupOptions = {}) {
		super(props)
		this.members = props.members || []
	}

	addMember(member: Player) {
		this.members.push(member)
		return this
	}

	setMembers(members: Player[]) {
		this.members = members
		return this
	}

	getMembers(): Player[] {
		return this.members
	}
}
