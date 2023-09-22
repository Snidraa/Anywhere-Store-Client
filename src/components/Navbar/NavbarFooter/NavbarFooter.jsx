import { useContext, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { useMediaQueries } from '../../../Hooks/useMediaQueries';
import { useOutsideClick } from '../../../Hooks/useOutsideClick';
import { account, avatar, cartBlack, cartWhite, logoBlue } from '../../../assets';
import { Context } from '../../../store/Context';
import { CART_ROUTE, SHOP_ROUTE } from '../../../utils/consts';
import AccountMenu from './AccountMenu/AccountMenu';
import styles from './NavbarFooter.module.scss';
import SearchArea from './Search/SearchArea';

const NavbarFooter = () => {
	const { user } = useContext(Context);
	const { isBigScreen } = useMediaQueries();
	const [showAccountMenu, setShowAccountMenu] = useState(false);
	const showAccountMenuRef = useRef(null);

	const toggleAccountMenu = () => {
		setShowAccountMenu(!showAccountMenu);
	};

	useOutsideClick(showAccountMenuRef, toggleAccountMenu, showAccountMenu);

	return (
		<div className={styles.navbarFooterWrapper}>
			<div className={styles.navbarFooter}>
				{isBigScreen ? (
					<>
						<div>
							<NavLink to={SHOP_ROUTE}>
								<img src={logoBlue} alt='logo' />
							</NavLink>
						</div>
						<SearchArea />
						<div className={styles.management}>
							<div>
								<NavLink to={CART_ROUTE} className={styles.cart}>
									<img src={cartBlack} alt='cart' />
									<p>{user.cart.length}</p>
								</NavLink>
							</div>
							<div ref={showAccountMenuRef} className={styles.accountMenu}>
								<img src={avatar} alt='avatar' onClick={toggleAccountMenu} />
								<CSSTransition
									in={showAccountMenu}
									timeout={250}
									classNames={{ enterActive: styles.accountMenuShow, exitActive: styles.accountMenuHide }}
									mountOnEnter
									unmountOnExit
								>
									<AccountMenu />
								</CSSTransition>
							</div>
						</div>
					</>
				) : (
					<>
						<SearchArea />
						<div className={styles.management}>
							<div className={styles.cart}>
								<img src={cartWhite} alt='cart' />
								<p>{user.cart.length}</p>
							</div>
							<div ref={showAccountMenuRef} className={styles.accountMenu}>
								<img src={account} alt='account' onClick={toggleAccountMenu} />
								<CSSTransition
									in={showAccountMenu}
									timeout={250}
									classNames={{ enterActive: styles.accountMenuShow, exitActive: styles.accountMenuHide }}
									mountOnEnter
									unmountOnExit
								>
									<AccountMenu />
								</CSSTransition>
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default NavbarFooter;
