import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../../../store/Context';
import { ADMIN_ROUTE, LOGIN_ROUTE } from '../../../../utils/consts';
import styles from './AccountMenu.module.scss';

const AccountMenu = observer(() => {
	const { user } = useContext(Context);
	const navigate = useNavigate();

	return (
		<div className={styles.menu}>
			{user.isAuth ? (
				<div className={styles.menu_list}>
					<button onClick={() => navigate(ADMIN_ROUTE)}>Admin Panel</button>
					<button>My Account</button>
					<button>My Favorites (0)</button>
					<button onClick={() => navigate(LOGIN_ROUTE)}>Sign Out</button>
				</div>
			) : (
				<div className={styles.menu_list}>
					<button onClick={() => navigate(LOGIN_ROUTE)}>Sign In</button>
				</div>
			)}
		</div>
	);
});

export default AccountMenu;
