import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Context } from '../../store/Context';

const CartForm = observer(() => {
	const { user } = useContext(Context);

	return <div>{user.cart.reduce((acc, curr) => acc + curr.count * curr.device.price, 0)}</div>;
});

export default CartForm;
