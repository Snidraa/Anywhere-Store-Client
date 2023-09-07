import { useContext } from 'react';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { Context } from '../../store/Context';
import styles from './Basket.module.scss';

const Basket = () => {
	const { user } = useContext(Context);

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
						{user.cart.map(item => (
							<div key={item.id} className={styles.cartItem}>
								<div className={styles.itemInfo}>
									<img src={item.img} alt="good's image" />
									<div>
										{item.name},&nbsp;
										{item.info.map(infoItem => (
											<>
												<span>{infoItem.title}: </span>
												<span>{infoItem.description},&nbsp;</span>
											</>
										))}
									</div>
								</div>
								<span className={styles.price}>$1500</span>
								<input className={styles.Qty} type='number' />
								<span className={styles.subtotal}>$1500</span>
								<div className={styles.actions}></div>
							</div>
						))}
						<div className={styles.cartList_buttons}>
							<div>
								<button className={styles.continueButton}>Continue Shopping</button>
								<button>Clear Shopping Cart</button>
							</div>
							<button>Update Shopping Cart</button>
						</div>
					</div>
					<div className={styles.b}></div>
				</div>
			</div>
		</main>
	);
};

export default Basket;
