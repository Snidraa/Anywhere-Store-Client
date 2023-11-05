import { observer } from 'mobx-react-lite';
import { useContext, useRef } from 'react';
import { arrowDownGray, arrowUpGray, cartBlue, likeGray, starYellow } from '../../assets';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { isDeviceInCart } from '../../middlewares/isDeviceInCart';
import { Context } from '../../store/Context';
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

	return (
		<main className={styles.wrapper}>
			<div className={styles.container}>
				<Breadcrumbs pathname={device.name} />
				<div className={styles.content}>
					<div className={styles.box1}>
						<img src={device.img} alt='' />
						<p className={styles.ratingRow}>
							<img src={starYellow} alt='' />
							{device.rating} ({device.ratesCount})
						</p>
					</div>
					<div className={styles.box2}>
						<div className={styles.box2_Header}>
							<div>
								<button className={styles.addToWishlist}>
									<img src={likeGray} alt='' />
								</button>
								<p className={styles.devicePrice}>
									On Sale from <span className={styles.devicePriceValue}>${device.price}</span>
								</p>
								{isDeviceInCart(user.cart, device.id) ? (
									<p>Device added to cart</p>
								) : (
									<>
										<div className={styles.DevicePageCounter}>
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
											<div className={styles.DevicePageCounter_controlArea}>
												<img src={arrowUpGray} alt='' onClick={incrementGoodsCount} />
												<img src={arrowDownGray} alt='' onClick={decrementGoodsCount} />
											</div>
										</div>
										<button className={styles.addToCart} onClick={addToCart}>
											<img src={cartBlue} alt='Add to cart' /> Add To Cart
										</button>
									</>
								)}
							</div>
						</div>
						<div className={styles.box2_Footer}>
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
