import { useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { arrow, avatar, basket, facebook, instagram, logo, search_close, search_open } from '../../assets';
import { useOutsideClick } from '../Hooks/useOutsideClick';
import AccountMenu from './AccountMenu/AccountMenu';
import styles from './Navbar.module.scss';
import ShopInfoPopup from './ShopInfoPopup/ShopInfoPopup';

const Navbar = () => {
	// const { user } = useContext(Context);
	const [searchMode, setSearchMode] = useState(false);
	const [showShopInfo, setShowShopInfo] = useState(false);
	const [showAccountMenu, setShowAccountMenu] = useState(false);

	const showInfoRef = useRef(null);

	const toggleSearch = () => {
		setSearchMode(!searchMode);
	};

	const toggleShopInfo = () => {
		setShowShopInfo(!showShopInfo);
	};

	const toggleAccountMenu = () => {
		setShowAccountMenu(!showAccountMenu);
	};

	useOutsideClick(showInfoRef, toggleShopInfo, showShopInfo);

	return (
		<div className={styles.navbar}>
			<div className={styles.navbar_header}>
				<div className={styles.shopInfo}>
					Mon-Thu:<span> 9:00 AM - 5:30 PM</span>
					<div ref={showInfoRef} className={styles.shopInfoPopup}>
						<img
							src={arrow}
							alt='arrow'
							onClick={toggleShopInfo}
							className={showShopInfo ? styles.arrow : styles.arrowUp}
						/>

						<CSSTransition
							in={showShopInfo}
							timeout={250}
							classNames={{ enterActive: styles.shopInfoPopupShow, exitActive: styles.shopInfoPopupHide }}
							mountOnEnter
							unmountOnExit
						>
							<ShopInfoPopup />
						</CSSTransition>
					</div>
				</div>
				<div className={styles.adress}>
					Visit our showroom in 1234 Street Adress City Address, 1234
					<a href='https://www.google.com/maps'>Contact Us</a>
				</div>
				<div className={styles.contacts}>
					<span>Call Us: (00) 1234 5678</span>
					<a href='https://www.facebook.com/'>
						<img src={facebook} alt='facebook' />
					</a>
					<a href='https://www.instagram.com/'>
						<img src={instagram} alt='instagram' />
					</a>
				</div>
			</div>
			<div className={styles.navbar_footer}>
				<div>
					<img src={logo} alt='logo' />
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
					<div className={styles.accountMenu}>
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
		</div>
	);
};

export default Navbar;
