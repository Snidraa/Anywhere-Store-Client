import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Context } from '../../store/Context';
import CartItem from '../CartItem/CartItem';
import styles from './CartList.module.scss';

const CartList = observer(() => {
	const { user } = useContext(Context);

	const updateCountProp = (index, newCount) => {
		user.setCountValueOfSelectedDeviceInCart(index, newCount);
	};

	return (
		<div className={styles.cartList}>
			<table>
				<thead className={styles.cartList_header}>
					<tr>
						<th>Item</th>
						<th>Price</th>
						<th>Qty</th>
						<th>Subtotal</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{user.cart.map((item, index) => (
						<CartItem item={item} index={index} updateCountProp={updateCountProp} key={item.device.id} />
					))}
				</tbody>
			</table>
			<div className={styles.cartList_buttons}>
				<div>
					<button className={styles.continueButton}>Continue Shopping</button>
					<button>Clear Shopping Cart</button>
				</div>
				<button onClick={() => console.log(user.cart)}>Update Shopping Cart</button>
			</div>
		</div>
	);
});

export default CartList;
