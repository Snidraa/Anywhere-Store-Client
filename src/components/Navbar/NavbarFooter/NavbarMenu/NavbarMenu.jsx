import { observer } from 'mobx-react-lite';
import { useContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { useOutsideClick } from '../../../../Hooks/useOutsideClick';
import { account, avatar } from '../../../../assets';
import { Context } from '../../../../store/Context';
import { ADMIN_ROUTE, LOGIN_ROUTE, WISHLIST_ROUTE } from '../../../../utils/consts';
import styles from './NavbarMenu.module.scss';

const NavbarMenu = observer(() => {
	const { user } = useContext(Context);
	const navigate = useNavigate();

	const [showMenu, setShowMenu] = useState(false);
	const showMenuRef = useRef(null);

	const toggleMenu = () => {
		setShowMenu(!showMenu);
	};

	useOutsideClick(showMenuRef, toggleMenu, showMenu);

	return (
		<div ref={showMenuRef} className={styles.container}>
			{user.isAuth ? (
				<img src={avatar} alt='avatar' onClick={toggleMenu} />
			) : (
				<img src={account} alt='account' onClick={toggleMenu} />
			)}
			<CSSTransition
				in={showMenu}
				timeout={250}
				classNames={{ enterActive: styles.menuShow, exitActive: styles.menuHide }}
				mountOnEnter
				unmountOnExit
			>
				<div className={styles.menu}>
					{user.isAuth ? (
						<div className={styles.menu_list}>
							<button onClick={() => navigate(ADMIN_ROUTE)}>Admin Panel</button>
							<button>My Account</button>
							<button onClick={() => navigate(WISHLIST_ROUTE)}>My Wishlist ({user.wishlist.length})</button>
							<button onClick={() => navigate(LOGIN_ROUTE)}>Sign Out</button>
						</div>
					) : (
						<div className={styles.menu_list}>
							<button onClick={() => navigate(LOGIN_ROUTE)}>Sign In</button>
						</div>
					)}
				</div>
			</CSSTransition>
		</div>
	);
});

export default NavbarMenu;
