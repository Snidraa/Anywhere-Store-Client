import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateCartSubTotal } from '../../middlewares/updateCartSubtotal';
import { Context } from '../../store/Context';
import { SHOP_ROUTE } from '../../utils/consts';
import CartItem from '../CartItem/CartItem';
import styles from './CartList.module.scss';

const CartList = observer(() => {
	const { user } = useContext(Context);
	const navigate = useNavigate();

	const toShopPage = () => {
		navigate(SHOP_ROUTE);
	};

	const updateCountProp = (index, newCount) => {
		user.setCountValueOfSelectedDeviceInCart(index, newCount);
	};

	const updateCart = (index, newCount) => {
		updateCountProp(index, newCount);
		updateCartSubTotal(user);
	};

	const removeCartItem = id => {
		const cart = user.cart.filter(item => item.device.id !== id);
		user.setCart(cart);
		updateCartSubTotal(user);
	};

	const clearCart = () => {
		user.setCart([]);
		updateCartSubTotal(user);
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
