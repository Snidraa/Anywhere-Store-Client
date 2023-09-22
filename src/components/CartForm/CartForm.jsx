import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Context } from '../../store/Context';
import styles from './CartForm.module.scss';

const CartForm = observer(() => {
	const { user } = useContext(Context);

	return (
		<div className={styles.CartForm}>
			<div>{user.cart.reduce((acc, curr) => acc + curr.count * curr.device.price, 0)}</div>
		</div>
	);
});

export default CartForm;
