import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Context } from '../../store/Context';
import CartItem from '../CartItem/CartItem';
import styles from './CartList.module.scss';

import { SHOP_ROUTE } from '../../utils/consts';
import { useNavigate } from 'react-router-dom';

const CartList = observer(() => {
	const { user } = useContext(Context);
	const navigate = useNavigate();

	const toShopPage = () => {
		navigate(SHOP_ROUTE);
	};
	const updateCountProp = (index, newCount) => {
		user.setCountValueOfSelectedDeviceInCart(index, newCount);
	};

	const updateCartSubTotal = () => {
		const cartSubTotal = user.cart.reduce((acc, curr) => acc + curr.count * curr.device.price, 0);
		user.setCartSubTotal(cartSubTotal);
	};

	const updateCart = (index, newCount) => {
		updateCountProp(index, newCount);
		updateCartSubTotal();
		console.log(user.cartSubTotal);
	};

	const removeCartItem = id => {
		const cart = user.cart.filter(item => item.device.id !== id);
		console.log('🚀 ~ file: CartList.jsx:27 ~ removeCartItem ~ user.cart:', cart);
		user.setCart(cart);
		updateCartSubTotal();
	};

	const clearCart = () => {
		user.setCart([]);
		updateCartSubTotal();
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
						<CartItem
							key={item.device.id}
							item={item}
							index={index}
							updateCart={updateCart}
							removeItem={removeCartItem}
						/>
					))}
				</tbody>
			</table>
			<div className={styles.cartList_buttons}>
				<div>
					<button className={styles.continueButton} onClick={toShopPage}>
						Continue Shopping
					</button>
				</div>
				<button onClick={clearCart}>Clear Shopping Cart</button>
				{/* <button onClick={() => console.log(user.cart)}>Update Shopping Cart</button> */}
			</div>
		</div>
	);
});

export default CartList;
