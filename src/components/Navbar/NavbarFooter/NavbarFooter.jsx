import { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { avatar, basket, logo, search_close, search_open } from '../../../assets';
import { SHOP_ROUTE } from '../../../utils/consts';
import { useOutsideClick } from '../../Hooks/useOutsideClick';
import AccountMenu from './AccountMenu/AccountMenu';
import styles from './NavbarFooter.module.scss';

const NavbarFooter = () => {
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
		<div className={styles.navbarFooter}>
			<div>
				<NavLink to={SHOP_ROUTE}>
					<img src={logo} alt='logo' />
				</NavLink>
			</div>
			<div className={styles.navigation}>
				<CSSTransition
					in={searchMode}
					timeout={250}
					classNames={{ enterActive: styles.areaShow, exitActive: styles.areaHide }}
					mountOnEnter
					unmountOnExit
				>
					<div className={styles.area}>
						<input type='text' placeholder='Search entire store here ...' />
						<img src={search_open} alt='search' />
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
					<img src={search_close} alt='close' onClick={toggleSearch} className={styles.searchClose} />
				) : (
					<img src={search_open} alt='search' onClick={toggleSearch} className={styles.searchOpen} />
				)}

				<div className={styles.basket}>
					<img src={basket} alt='basket' />
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
		</div>
	);
};

export default NavbarFooter;
