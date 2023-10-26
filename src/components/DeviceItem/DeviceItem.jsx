import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { cartBlue, likeGray, starYellow } from '../../assets';
import { isDeviceInCart } from '../../middlewares/isDeviceInCart';
import { updateCartSubTotal } from '../../middlewares/updateCartSubtotal';
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

	const toCart = () => {
		navigate(CART_ROUTE);
	};

	const addToCart = () => {
		const itemToAdd = { count: 1, device: device };
		user.setCart([...user.cart, itemToAdd]);
		updateCartSubTotal(user);
	};

	return (
		<div className={styles.deviceItem}>
			<button className={styles.deviceItemAddToWishlist} onClick={addToWishlist}>
				<img src={likeGray} alt='' />
			</button>
			<div className={styles.deviceItem_Content} onClick={toDevicePage}>
				<img src={device.img} alt='' className={styles.deviceItemImage} />
				<div className={styles.deviceItemInfo}>
					<p className={styles.deviceItemRatingRow}>
						<img src={starYellow} alt='' />
						{device.rating} ({device.ratesCount})
					</p>
					<p className={styles.deviceItemName}>{device.name}</p>
					<p className={styles.deviceItemPrice}>${device.price}</p>
				</div>
			</div>
			<div className={styles.deviceItemButtons}>
				{isDeviceInCart(user.cart, device.id) ? (
					<button className={styles.deviceItemInCart} onClick={toCart}>
						Check In cart
					</button>
				) : (
					<button className={styles.deviceItemAddToCart} onClick={addToCart}>
						<img src={cartBlue} alt='Add to cart' /> Add To Cart
					</button>
				)}
			</div>
		</div>
	);
});

export default DeviceItem;
