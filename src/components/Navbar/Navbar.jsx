import { useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { arrow, avatar, basket, facebook, instagram, logo, search_close, search_open } from '../../assets';
import { useOutsideClick } from '../Hooks/useOutsideClick';
import styles from './Navbar.module.scss';
import ShopInfo from './Schedule/ShopInfo';

const Navbar = () => {
	// const { user } = useContext(Context);
	const [searchMode, setSearchMode] = useState(false);
	const [showShopInfo, setShowShopInfo] = useState(false);

	const showInfoRef = useRef(null);

	const toggleSearch = () => {
		setSearchMode(!searchMode);
	};

	const toggleShopInfo = () => {
		setShowShopInfo(!showShopInfo);
	};

	useOutsideClick(showInfoRef, toggleShopInfo, showShopInfo);

	return (
		<div className={styles.navbar}>
			<div className={styles.navbar_header}>
				<div className={styles.schedule}>
					Mon-Thu:<span> 9:00 AM - 5:30 PM</span>
					<div ref={showInfoRef} className={styles.shopInfo}>
						<img
							src={arrow}
							alt='arrow'
							onClick={toggleShopInfo}
							className={!showShopInfo ? styles.arrow : styles.arrowDown}
						/>
						<CSSTransition
							in={showShopInfo}
							timeout={250}
							classNames={{ enterActive: styles.shopInfoShow, exitActive: styles.shopInfoHide }}
							mountOnEnter
							unmountOnExit
						>
							<ShopInfo />
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
							<img src={search_open} alt='' />
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
						<img src={search_close} alt='' onClick={toggleSearch} />
					) : (
						<img src={search_open} alt='' onClick={toggleSearch} />
					)}

					<img src={basket} alt='' />
					<img src={avatar} alt='' />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
