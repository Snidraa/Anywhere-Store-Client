import { observer } from 'mobx-react-lite';
import { useContext, useRef, useState } from 'react';
import { arrowDownGray, arrowUpGray, crossRounded } from '../../assets';
import { isDeviceInCart } from '../../middlewares/isDeviceInCart';
import { updateCartSubTotal } from '../../middlewares/updateCartSubtotal';
import { Context } from '../../store/Context';
import BlueButton from '../Buttons/BlueButton';
import styles from './WishlistItem.module.scss';

const WishlistItem = observer(props => {
	const { item, index, removeItem } = { ...props };
	const { user } = useContext(Context);
	console.log(`WishItem ${index} rendered`);
	const WishlistItemCounter = useRef(null);
	const [count, setCount] = useState(1);
	const [subTotal, setSubTotal] = useState(item.price * count);

	const setItemCount = value => {
		const newCount = Number(value);
		setCount(newCount);
		setSubTotal(item.price * newCount);
	};

	const increment = () => {
		if (parseInt(WishlistItemCounter.current.value) === parseInt(WishlistItemCounter.current.max)) return null;
		WishlistItemCounter.current.value =
			Number(WishlistItemCounter.current.value) + Number(WishlistItemCounter.current.step);
		setItemCount(WishlistItemCounter.current.value);
	};

	const decrement = () => {
		if (parseInt(WishlistItemCounter.current.value) === parseInt(WishlistItemCounter.current.min)) return null;
		WishlistItemCounter.current.value =
			Number(WishlistItemCounter.current.value) - Number(WishlistItemCounter.current.step);
		setItemCount(WishlistItemCounter.current.value);
	};

	const addToCart = () => {
		const itemToAdd = { count: count, device: item };
		user.setCart([...user.cart, itemToAdd]);
		updateCartSubTotal(user);
	};

	return (
		<tr className={styles.wishlistItem}>
			<td className={styles.itemInfo}>
				<img src={item.img} alt="good's image" />
				<div>
					{item.name},&nbsp;
					{item.info ? (
						item.info.map(infoItem => (
							<div key={infoItem.title}>
								<span>{infoItem.title}: </span>
								<span>{infoItem.description},&nbsp;</span>
							</div>
						))
					) : (
						<p>No info</p>
					)}
				</div>
			</td>
			<td className={styles.price}>${subTotal}</td>
			{isDeviceInCart(user.cart, item.id) ? (
				<td>Device added to Cart</td>
			) : (
				<td className={styles.cartBlock}>
					<div className={styles.cartBlock_counter}>
						<img src={arrowUpGray} alt='increment' onClick={increment} />
						<input
							ref={WishlistItemCounter}
							className={styles.cartBlock_textField}
							type='number'
							id='count'
							name='count'
							step='1'
							min='1'
							max='100'
							defaultValue={count}
							readOnly
						/>
						<img src={arrowDownGray} alt='decrement' onClick={decrement} />
					</div>
					<BlueButton onClick={addToCart}>Add to Cart</BlueButton>
				</td>
			)}
			<td className={styles.actions}>
				<img src={crossRounded} alt='' onClick={() => removeItem(item.id)} />
			</td>
		</tr>
	);
});

export default WishlistItem;
