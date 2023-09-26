import { observer } from 'mobx-react-lite';
import { useEffect, useRef, useState } from 'react';
import { useCountPrice } from '../../Hooks/useCountPrice';
import { getDiscount } from '../../utils/promocodes';
import Dropdown from '../Dropdown/Dropdown';
import styles from './CartForm.module.scss';

const CartForm = observer(() => {
	const discountRef = useRef(null);
	const { subTotal, GST } = useCountPrice();
	const [orderTotal, setOrderTotal] = useState(subTotal);
	const [discountInfo, setDiscountInfo] = useState({});
	const [showUncorrectPromoMessage, setShowUncorrectPromoMessage] = useState(false);

	useEffect(() => {
		updateOrderTotal();
	}, [subTotal]);

	const updateOrderTotal = () => {
		const code = discountRef.current.value;
		if (!code || subTotal === 0) {
			setShowUncorrectPromoMessage(false);
			setOrderTotal(subTotal);
			setDiscountInfo({});
			return;
		}

		const discount = getDiscount(code, subTotal);
		if (discount) {
			setShowUncorrectPromoMessage(false);
			setDiscountInfo(discount);

			const newOrderTotal = subTotal - discount.amount;
			setOrderTotal(newOrderTotal);
			return;
		}

		setShowUncorrectPromoMessage(true);
		setOrderTotal(subTotal);
		setDiscountInfo({});
	};

	return (
		<div className={styles.cartForm}>
			<div className={styles.cartForm_header}>
				<h2>Summary</h2>
				<p>You can pick up your item from the store at Union Street 42, Night City.</p>
				<Dropdown title={'Apply Discount Code'} height={showUncorrectPromoMessage ? `${14}rem` : `${11}rem`}>
					<div className={styles.discountForm}>
						<input ref={discountRef} type='text' placeholder='Enter Discount code' />
						{showUncorrectPromoMessage && <span>Uncorrect Promo!</span>}
						<button onClick={updateOrderTotal}>Apply Discount</button>
					</div>
				</Dropdown>
			</div>
			<table>
				<tbody>
					<tr>
						<td>Subtotal</td>
						<td>${subTotal}</td>
					</tr>
					<tr>
						<td>Tax</td>
						<td>${GST}</td>
					</tr>
					<tr>
						<td>GST (12%)</td>
						<td>${GST}</td>
					</tr>
					{Object.keys(discountInfo).length !== 0 && (
						<tr>
							<td>Discount ({discountInfo.percent}%)</td>
							<td>${discountInfo.amount}</td>
						</tr>
					)}
					<tr>
						<td>Order Total</td>
						<td>${orderTotal}</td>
					</tr>
				</tbody>
			</table>
			<button></button>
			<p className={styles.deliverInfo}>We are working on adding a delivery option. Thank you for your purchase.</p>
		</div>
	);
});

export default CartForm;
