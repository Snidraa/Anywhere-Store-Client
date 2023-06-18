import { makeAutoObservable } from 'mobx';

export default class BrandStore {
	constructor() {
		this._brands = [
			{ id: 1, name: 'Apple' },
			{ id: 2, name: 'Samsung' },
			{ id: 3, name: 'Xiaomi' },
			{ id: 4, name: 'LG' },
			{ id: 5, name: 'Lenovo' },
		];
		makeAutoObservable(this);
	}

	setBrands(brands) {
		this._brands = brands;
	}

	getBrands() {
		return this._brands;
	}
}
