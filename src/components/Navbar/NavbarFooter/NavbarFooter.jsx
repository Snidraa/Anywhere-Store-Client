import { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { useMediaQueries } from '../../../Hooks/useMediaQueries';
import { useOutsideClick } from '../../../Hooks/useOutsideClick';
import { account, avatar, basketBlack, basketWhite, logoBlue } from '../../../assets';
import { BASKET_ROUTE, SHOP_ROUTE } from '../../../utils/consts';
import AccountMenu from './AccountMenu/AccountMenu';
import styles from './NavbarFooter.module.scss';
import SearchArea from './Search/SearchArea';

const NavbarFooter = () => {
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
								<NavLink to={BASKET_ROUTE} className={styles.basket}>
									<img src={basketBlack} alt='basket' />
									<p>2</p>
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
							<div className={styles.basket}>
								<img src={basketWhite} alt='basket' />
								<p>2</p>
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
