import styles from './AccountMenu.module.scss';

const AccountMenu = () => {
	return (
		<div className={styles.menu}>
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
					<a href=''>Sign In</a>
				</li>
			</ul>
		</div>
	);
};

export default AccountMenu;
