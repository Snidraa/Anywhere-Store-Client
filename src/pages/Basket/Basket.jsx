import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import CartForm from '../../components/CartForm/CartForm';
import CartItem from '../../components/CartItem/CartItem';
import { Context } from '../../store/Context';
import styles from './Basket.module.scss';

const Basket = observer(() => {
	console.log('Cart rendered');
	const { user } = useContext(Context);

	const updateCart = (index, newCount) => {
		user.updateCartItemCount(index, newCount);
	};

	return (
		<main className={styles.wrapper}>
			<div className={styles.container}>
				<Breadcrumbs pathname='Shopping Cart' />
				<h1>Shopping Cart</h1>
				<div className={styles.content}>
					<div className={styles.cartList}>
						<div className={styles.cartList_header}>
							<span>Item</span>
							<span>Price</span>
							<span>Qty</span>
							<span>Subtotal</span>
							<span></span>
						</div>
						{user.cart.map((item, index) => (
							<CartItem item={item} index={index} updateCart={updateCart} key={item.device.id} />
						))}
						<div className={styles.cartList_subTotal}>
							<span></span>
							<span></span>
							<span></span>
							{/* <span>${subTotalPrice}</span> */}
							<span></span>
						</div>
						<div className={styles.cartList_buttons}>
							<div>
								<button className={styles.continueButton}>Continue Shopping</button>
								<button>Clear Shopping Cart</button>
							</div>
							<button onClick={() => console.log(user.cart)}>Update Shopping Cart</button>
						</div>
					</div>
					<div className={styles.b}>
						<CartForm />
					</div>
				</div>
			</div>
		</main>
	);
});

export default Basket;
