import { makeAutoObservable } from 'mobx';

export default class UserStore {
	constructor() {
		this._isAuth = true;
		this._user = {};
		this._favorite = [
			{
				id: 1,
				name: 'Iphone 12',
				price: 1500,
				rating: 5,
				ratesCount: 20,
				img: 'https://object.pscloud.io/cms/cms/Photo/img_0_77_2624_0_1.jpg',
			},
			{
				id: 2,
				name: 'Iphone 12',
				price: 1500,
				rating: 5,
				ratesCount: 20,
				img: 'https://object.pscloud.io/cms/cms/Photo/img_0_77_2624_0_1.jpg',
			},
			{
				id: 3,
				name: 'Iphone 12',
				price: 1500,
				rating: 5,
				ratesCount: 20,
				img: 'https://object.pscloud.io/cms/cms/Photo/img_0_77_2624_0_1.jpg',
			},
		];
		this._cart = [
			{
				id: 1,
				name: 'Iphone 12',
				price: 1500,
				rating: 5,
				ratesCount: 20,
				img: 'https://object.pscloud.io/cms/cms/Photo/img_0_77_2624_0_1.jpg',
			},
			{
				id: 2,
				name: 'Iphone 12',
				price: 1500,
				rating: 5,
				ratesCount: 20,
				img: 'https://object.pscloud.io/cms/cms/Photo/img_0_77_2624_0_1.jpg',
			},
			{
				id: 3,
				name: 'Iphone 12',
				price: 1500,
				rating: 5,
				ratesCount: 20,
				img: 'https://object.pscloud.io/cms/cms/Photo/img_0_77_2624_0_1.jpg',
			},
		];
		makeAutoObservable(this);
	}

	setIsAuth(bool) {
		this._isAuth = bool;
	}

	setUser(user) {
		this._user = user;
	}

	setFavorite(favorite) {
		this._favorite = favorite;
	}

	setCart(cart) {
		this._cart = cart;
	}

	get isAuth() {
		return this._isAuth;
	}

	get user() {
		return this._user;
	}

	get favorite() {
		return this._favorite;
	}

	get cart() {
		return this._cart;
	}
}
