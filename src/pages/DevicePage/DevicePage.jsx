import { observer } from 'mobx-react-lite';
import { useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { arrowDownGray, arrowUpGray, cartBlue, cartGreen, likeGray, likeRed, starYellow } from '../../assets';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { BlueButton, GreenButton } from '../../components/Buttons';
import { isDeviceInCart } from '../../middlewares/isDeviceInCart';
import { isDeviceInWishlist } from '../../middlewares/isDeviceInWishlist';
import { Context } from '../../store/Context';
import { CART_ROUTE } from '../../utils/consts';
import styles from './DevicePage.module.scss';

const DevicePage = observer(() => {
	const { user } = useContext(Context);
	const device = {
		id: 1,
		name: 'Iphone 12',
		price: 1500,
		rating: 5,
		ratesCount: 20,
		img: 'https://object.pscloud.io/cms/cms/Photo/img_0_77_2624_0_1.jpg',
		info: [
			{ id: 1, title: 'Оперативная память', description: '5 гб' },
			{ id: 2, title: 'Камера', description: '12 мп' },
			{ id: 3, title: 'Процессор', description: 'Пентиум 3' },
			{ id: 4, title: 'Кол-во ядер', description: '2' },
			{ id: 5, title: 'Аккумулятор', description: '4000 мАч' },
		],
	};

	const info = device.info;
	const DevicePageCounter = useRef(null);

	const navigate = useNavigate();

	const toCart = () => {
		navigate(CART_ROUTE);
	};

	const incrementGoodsCount = () => {
		const prevValue = DevicePageCounter.current.value;
		const step = Number(DevicePageCounter.current.step);
		if (parseInt(prevValue) === parseInt(DevicePageCounter.current.max)) return null;
		DevicePageCounter.current.value = Number(prevValue) + step;
	};

	const decrementGoodsCount = () => {
		const prevValue = DevicePageCounter.current.value;
		const step = Number(DevicePageCounter.current.step);
		if (parseInt(prevValue) === parseInt(DevicePageCounter.current.min)) return null;
		DevicePageCounter.current.value = Number(prevValue) - step;
	};

	const addToCart = () => {
		const count = Number(DevicePageCounter.current.value);
		const itemToAdd = { count: count, device: device };
		user.setCart([...user.cart, itemToAdd]);
	};

	const addToWishlist = () => {
		user.setWishlist([...user.wishlist, device]);
	};

	const removeWishlistItem = id => {
		const wishlist = user.wishlist.filter(item => item.id !== id);
		user.setWishlist(wishlist);
	};

	return (
		<main className={styles.wrapper}>
			<div className={styles.container}>
				<Breadcrumbs pathname={device.name} />
				<div className={styles.content}>
					<div className={styles.content_header}>
						<img src={device.img} alt='device image' />
						<p className={styles.ratingRow}>
							<img src={starYellow} alt='rating star' />
							{device.rating} ({device.ratesCount})
						</p>
					</div>
					<div className={styles.content_footer}>
						<div className={styles.content_footerActions}>
							<div className={styles.addToWishlist}>
								{isDeviceInWishlist(user.wishlist, device.id) ? (
									<img src={likeRed} alt='like red' onClick={() => removeWishlistItem(device.id)} />
								) : (
									<img src={likeGray} alt='like gray' onClick={addToWishlist} />
								)}
							</div>
							<p className={styles.devicePrice}>
								On Sale from <span className={styles.devicePriceValue}>${device.price}</span>
							</p>
							{isDeviceInCart(user.cart, device.id) ? (
								<GreenButton onClick={toCart}>
									<img src={cartGreen} alt='' /> Show
								</GreenButton>
							) : (
								<>
									<div className={styles.DevicePageCounter}>
										<img src={arrowDownGray} alt='' onClick={decrementGoodsCount} />
										<input
											ref={DevicePageCounter}
											className={styles.DevicePageCounter_textField}
											type='number'
											id='goodsCount'
											name='Goods count'
											step='1'
											min='1'
											max='100'
											defaultValue={1}
											readOnly
										/>
										<img src={arrowUpGray} alt='' onClick={incrementGoodsCount} />
									</div>
									<BlueButton onClick={addToCart}>
										<img src={cartBlue} alt='Add to cart' /> Add
									</BlueButton>
								</>
							)}
						</div>
						<div className={styles.content_footerInfo}>
							<p className={styles.deviceName}>{device.name}</p>
							<div className={styles.deviceInfo}>
								{info.map(item => (
									<p key={item.title}>
										• {item.title}: {item.description}
									</p>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
});

export default DevicePage;
