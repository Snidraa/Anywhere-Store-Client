import { makeAutoObservable } from 'mobx';

export default class TypeStore {
	constructor() {
		this._types = [
			{ id: 1, name: 'Refrigerator' },
			{ id: 2, name: 'Smartphone' },
		];
		makeAutoObservable(this);
	}

	setTypes(types) {
		this._types = types;
	}

	getTypes() {
		return this._types;
	}
}
