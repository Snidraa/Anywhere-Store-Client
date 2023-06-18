import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
	constructor() {
		this._devices = [
			{
				id: 1,
				name: 'Iphone 12',
				price: 400000,
				rating: 5,
				ratesCount: 20,
				img: 'https://object.pscloud.io/cms/cms/Photo/img_0_77_2624_0_1.jpg',
			},
			{
				id: 2,
				name: 'Iphone 12',
				price: 400000,
				rating: 5,
				ratesCount: 20,
				img: 'https://object.pscloud.io/cms/cms/Photo/img_0_77_2624_0_1.jpg',
			},
			{
				id: 3,
				name: 'Iphone 12',
				price: 400000,
				rating: 5,
				ratesCount: 20,
				img: 'https://object.pscloud.io/cms/cms/Photo/img_0_77_2624_0_1.jpg',
			},
			{
				id: 4,
				name: 'Iphone 12',
				price: 400000,
				rating: 5,
				ratesCount: 20,
				img: 'https://object.pscloud.io/cms/cms/Photo/img_0_77_2624_0_1.jpg',
			},
			{
				id: 5,
				name: 'Iphone 12',
				price: 400000,
				rating: 5,
				ratesCount: 20,
				img: 'https://object.pscloud.io/cms/cms/Photo/img_0_77_2624_0_1.jpg',
			},
		];
		makeAutoObservable(this);
	}

	setDevices(devices) {
		this._devices = devices;
	}

	getDevices() {
		return this._devices;
	}
}
