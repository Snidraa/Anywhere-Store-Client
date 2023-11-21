import { observer } from 'mobx-react-lite';
import { useContext, useRef, useState } from 'react';
import { FaCartPlus, FaCartShopping } from 'react-icons/fa6';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { crossRounded } from '../../assets';
import { isDeviceInCart } from '../../middlewares/isDeviceInCart';
import { Context } from '../../store/Context';
import { CART_ROUTE } from '../../utils/consts';
import { BlueButton, GreenButton } from '../Buttons';
import styles from './WishlistItem.module.scss';

const WishlistItem = observer(props => {
	const { item, index, removeItem } = { ...props };
	const { user } = useContext(Context);
	console.log(`WishItem ${index} rendered`);
	const WishlistItemCounter = useRef(null);
	const [count, setCount] = useState(1);
	const [subTotal, setSubTotal] = useState(item.price * count);
	const navigate = useNavigate();

	const toCart = () => {
		navigate(CART_ROUTE);
	};

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
			<td className={styles.cartBlock}>
				{isDeviceInCart(user.cart, item.id) ? (
					<GreenButton onClick={toCart}>
						<FaCartShopping className={styles.buttonIcon} /> Show
					</GreenButton>
				) : (
					<>
						<div className={styles.cartBlock_counter}>
							<MdKeyboardArrowUp className={styles.cartBlock_counterButton} onClick={increment} />
							{/* <img src={arrowUpGray} alt='increment' onClick={increment} /> */}
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
							<MdKeyboardArrowDown className={styles.cartBlock_counterButton} onClick={decrement} />
							{/* <img src={arrowDownGray} alt='decrement' onClick={decrement} /> */}
						</div>

						<BlueButton onClick={addToCart}>
							<FaCartPlus className={styles.buttonIcon} /> Add
						</BlueButton>
					</>
				)}
			</td>
			<td className={styles.actions}>
				<img src={crossRounded} alt='' onClick={() => removeItem(item.id)} />
			</td>
		</tr>
	);
});

export default WishlistItem;
