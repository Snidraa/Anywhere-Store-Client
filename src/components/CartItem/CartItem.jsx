import { useRef, useState } from 'react';
import { arrowDownGray, arrowUpGray, crossRounded } from '../../assets';
import styles from './CartItem.module.scss';

const CartItem = props => {
	const { item, index, updateCountProp } = { ...props };
	console.log(`CartItem ${index} rendered`);
	const { price } = { ...item.device };
	const counter = useRef(null);
	const [subTotal, setSubTotal] = useState(price * item.count);

	const setCount = value => {
		const newCount = Number(value);
		setSubTotal(price * newCount);
		updateCountProp(index, newCount);
	};

	const increment = () => {
		if (parseInt(counter.current.value) === parseInt(counter.current.max)) return null;
		counter.current.value = Number(counter.current.value) + Number(counter.current.step);
		setCount(counter.current.value);
	};

	const decrement = () => {
		if (parseInt(counter.current.value) === parseInt(counter.current.min)) return null;
		counter.current.value = parseInt(counter.current.value) - parseInt(counter.current.step);
		setCount(counter.current.value);
	};

	return (
		<tr className={styles.cartItem}>
			<td className={styles.itemInfo}>
				<img src={item.device.img} alt="good's image" />
				<div>
					{item.device.name},&nbsp;
					{item.device?.info.map(infoItem => (
						<div key={infoItem.title}>
							<span>{infoItem.title}: </span>
							<span>{infoItem.description},&nbsp;</span>
						</div>
					))}
				</div>
			</td>
			<td className={styles.price}>${price}</td>
			<td className={styles.Qty}>
				<input
					ref={counter}
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
				<img src={crossRounded} alt='' />
			</td>
		</tr>
	);
};

export default CartItem;
