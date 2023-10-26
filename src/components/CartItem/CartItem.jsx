import { useRef, useState } from 'react';
import { arrowDownGray, arrowUpGray, crossRounded } from '../../assets';
import styles from './CartItem.module.scss';

const CartItem = props => {
	const { item, index, updateCart, removeItem } = { ...props };
	console.log(`CartItem ${index} rendered`);
	const { price } = { ...item.device };
	const CartItemCounter = useRef(null);
	const [subTotal, setSubTotal] = useState(price * item.count);

	const setCount = value => {
		const newCount = Number(value);
		setSubTotal(price * newCount);
		updateCart(index, newCount);
	};

	const increment = () => {
		if (parseInt(CartItemCounter.current.value) === parseInt(CartItemCounter.current.max)) return null;
		CartItemCounter.current.value = Number(CartItemCounter.current.value) + Number(CartItemCounter.current.step);
		setCount(CartItemCounter.current.value);
	};

	const decrement = () => {
		if (parseInt(CartItemCounter.current.value) === parseInt(CartItemCounter.current.min)) return null;
		CartItemCounter.current.value = Number(CartItemCounter.current.value) - Number(CartItemCounter.current.step);
		setCount(CartItemCounter.current.value);
	};

	return (
		<tr className={styles.cartItem}>
			<td className={styles.itemInfo}>
				<img src={item.device.img} alt="good's image" />
				<div>
					{item.device.name},&nbsp;
					{item.device.info ? (
						item.device.info.map(infoItem => (
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
			<td className={styles.price}>${price}</td>
			<td className={styles.Qty}>
				<input
					ref={CartItemCounter}
					className={styles.Qty_textField}
					type='number'
					id='count'
					name='count'
					step='1'
					min='1'
					max='100'
					defaultValue={item.count}
					readOnly
				/>
				<div className={styles.Qty_controlArea}>
					<img src={arrowUpGray} alt='increment' onClick={increment} />
					<img src={arrowDownGray} alt='decrement' onClick={decrement} />
				</div>
			</td>
			<td className={styles.subtotal}>${subTotal}</td>
			<td className={styles.actions}>
				<img src={crossRounded} alt='' onClick={() => removeItem(item.device.id)} />
			</td>
		</tr>
	);
};

export default CartItem;
