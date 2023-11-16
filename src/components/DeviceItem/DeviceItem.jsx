import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { cartBlue, cartGreen, likeGray, likeRed, starYellow } from '../../assets';
import { isDeviceInCart } from '../../middlewares/isDeviceInCart';
import { isDeviceInWishlist } from '../../middlewares/isDeviceInWishlist';
import { Context } from '../../store/Context';
import { CART_ROUTE, DEVICE_ROUTE } from '../../utils/consts';
import styles from './DeviceItem.module.scss';

const DeviceItem = observer(props => {
	const { user } = useContext(Context);
	const { device } = { ...props };
	const navigate = useNavigate();

	const toDevicePage = () => {
		navigate(DEVICE_ROUTE + '/' + device.id);
	};

	const addToWishlist = () => {
		user.setWishlist([...user.wishlist, device]);
	};

	const removeWishlistItem = id => {
		const wishlist = user.wishlist.filter(item => item.id !== id);
		user.setWishlist(wishlist);
	};

	const toCart = () => {
		navigate(CART_ROUTE);
	};

	const addToCart = () => {
		const itemToAdd = { count: 1, device: device };
		user.setCart([...user.cart, itemToAdd]);
	};

	return (
		<div className={styles.deviceItem}>
			<div className={styles.addToWishlist}>
				{isDeviceInWishlist(user.wishlist, device.id) ? (
					<img src={likeRed} alt='' onClick={() => removeWishlistItem(device.id)} />
				) : (
					<img src={likeGray} alt='' onClick={addToWishlist} />
				)}
			</div>
			<img src={device.img} alt='' onClick={toDevicePage} />
			<div className={styles.deviceItemContent}>
				{/* <div className={styles.deviceImage}></div> */}
				<div className={styles.deviceItemContent_Header} onClick={toDevicePage}>
					<p className={styles.deviceItemContent_Name}>{device.name}</p>
					<p className={styles.deviceItemContent_RatingRow}>
						<img src={starYellow} alt='' />
						{device.rating} ({device.ratesCount})
					</p>
				</div>
				<div className={styles.deviceItemContent_Footer}>
					<p className={styles.deviceItemContent_Price}>${device.price}</p>
					{isDeviceInCart(user.cart, device.id) ? (
						<button className={styles.showInCart} onClick={toCart}>
							<img src={cartGreen} alt='' /> Show
						</button>
					) : (
						<button className={styles.addToCart} onClick={addToCart}>
							<img src={cartBlue} alt='Add to cart' /> Add
						</button>
					)}
				</div>
			</div>
		</div>
	);
});

export default DeviceItem;
