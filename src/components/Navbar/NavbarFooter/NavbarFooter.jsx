import { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { useMediaQueries } from '../../../Hooks/useMediaQueries';
import { useOutsideClick } from '../../../Hooks/useOutsideClick';
import { account, avatar, basketBlack, basketWhite, crossBlue, logoBlue, search } from '../../../assets';
import { SHOP_ROUTE } from '../../../utils/consts';
import AccountMenu from './AccountMenu/AccountMenu';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import styles from './NavbarFooter.module.scss';
import SearchArea from './Search/SearchArea';

const NavbarFooter = () => {
	const { isBigScreen } = useMediaQueries();

	const [searchMode, setSearchMode] = useState(false);
	const [showAccountMenu, setShowAccountMenu] = useState(false);

	const showAccountMenuRef = useRef(null);

	const toggleSearch = () => {
		setSearchMode(!searchMode);
	};

	const toggleAccountMenu = () => {
		setShowAccountMenu(!showAccountMenu);
	};

	useOutsideClick(showAccountMenuRef, toggleAccountMenu, showAccountMenu);

	return (
		<div className={styles.navbarFooterWrapper}>
			<div className={styles.navbarFooter}>
				{isBigScreen && (
					<>
						<div>
							<NavLink to={SHOP_ROUTE}>
								<img src={logoBlue} alt='logo' />
							</NavLink>
						</div>
						<div className={styles.menuAndSearch}>
							<CSSTransition
								in={searchMode}
								timeout={250}
								classNames={{ enterActive: styles.searchShow, exitActive: styles.searchHide }}
								mountOnEnter
								unmountOnExit
							>
								<div className={styles.search}>
									<SearchArea />
								</div>
							</CSSTransition>
							<CSSTransition
								in={!searchMode}
								timeout={250}
								classNames={{ enterActive: styles.menuShow, exitActive: styles.menuHide }}
								mountOnEnter
								unmountOnExit
							>
								<div className={styles.menu}>
									<ul>
										<li>
											<a href=''>Laptops</a>
										</li>
										<li>
											<a href=''>Desktop PCs</a>
										</li>
										<li>
											<a href=''>Networking Devices</a>
										</li>
										<li>
											<a href=''>Printers & Scanners</a>
										</li>
										<li>
											<a href=''>PC Parts</a>
										</li>
										<li>
											<a href=''>All Other Products</a>
										</li>
									</ul>
								</div>
							</CSSTransition>
						</div>
						<div className={styles.management}>
							{searchMode ? (
								<img src={crossBlue} alt='close' onClick={toggleSearch} className={styles.searchClose} />
							) : (
								<img src={search} alt='search' onClick={toggleSearch} className={styles.searchOpen} />
							)}
							<div className={styles.basket}>
								<img src={basketBlack} alt='basket' />
								<p>2</p>
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
				)}

				{!isBigScreen && (
					<>
						<BurgerMenu />
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
