import { useRef } from 'react';
import { arrowDownGray, arrowUpGray, cartBlue, likeGray, starYellow } from '../../assets';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import styles from './DevicePage.module.scss';

const DevicePage = () => {
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
	const goodsCounter = useRef(null);

	const incrementGoodsCount = () => {
		if (parseInt(goodsCounter.current.value) === parseInt(goodsCounter.current.max)) return null;
		if (!goodsCounter.current.value) goodsCounter.current.value = 0;
		goodsCounter.current.value = parseInt(goodsCounter.current.value) + parseInt(goodsCounter.current.step);
	};

	const decrementGoodsCount = () => {
		if (parseInt(goodsCounter.current.value) === parseInt(goodsCounter.current.min)) return null;
		goodsCounter.current.value = parseInt(goodsCounter.current.value) - parseInt(goodsCounter.current.step);
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
							</div>
							<div>
								<div className={styles.goodsCounter}>
									<input
										ref={goodsCounter}
										className={styles.goodsCounter_textField}
										type='number'
										id='goodsCount'
										name='Goods count'
										placeholder='0'
										step='1'
										min='1'
										max='100'
									/>
									<div className={styles.goodsCounter_controlArea}>
										<img src={arrowUpGray} alt='' onClick={incrementGoodsCount} />
										<img src={arrowDownGray} alt='' onClick={decrementGoodsCount} />
									</div>
								</div>
								<button className={styles.addToCart}>
									<img src={cartBlue} alt='Add to cart' /> Add To Cart
								</button>
							</div>
						</div>
						<div className={styles.box2_Footer}>
							<p className={styles.deviceName}>{device.name}</p>
							<div className={styles.deviceInfo}>
								{info.map(item => (
									<p key={item.id}>
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
};

export default DevicePage;
