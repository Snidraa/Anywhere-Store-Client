import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Context } from '../../../main';
import { LOGIN_ROUTE } from '../../../utils/consts';
import styles from './AccountMenu.module.scss';

const AccountMenu = observer(() => {
	const { user } = useContext(Context);

	const toggleIsAuth = (e, bool) => {
		e.preventDefault();
		user.setIsAuth(bool);
	};

	return (
		<div className={styles.menu}>
			{user.getIsAuth() ? (
				<ul className={styles.menu_list}>
					<li>
						<a href=''>Admin Panel</a>
					</li>
					<li>
						<a href=''>My Account</a>
					</li>
					<li>
						<a href=''>My Wish List (0)</a>
					</li>
					<li>
						<a href=''>Compare (0)</a>
					</li>
					<li>
						<a href='' onClick={e => toggleIsAuth(e, false)}>
							Sign Out
						</a>
					</li>
				</ul>
			) : (
				<ul className={styles.menu_list}>
					<li>
						<a href=''>My Account</a>
					</li>
					<li>
						<a href=''>My Wish List (0)</a>
					</li>
					<li>
						<a href=''>Compare (0)</a>
					</li>
					<li>
						<NavLink to={LOGIN_ROUTE}>Sign In</NavLink>
					</li>
				</ul>
			)}
		</div>
	);
});

export default AccountMenu;
