import { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { arrowDown, facebook, instagram, logoWhite } from '../../../assets';
import { SHOP_ROUTE } from '../../../utils/consts';
import { useMediaQueries } from '../../Hooks/useMediaQueries';
import { useOutsideClick } from '../../Hooks/useOutsideClick';
import styles from './NavbarHeader.module.scss';
import ShopInfoPopup from './ShopInfoPopup/ShopInfoPopup';

const NavbarHeader = () => {
	const { isBigScreen } = useMediaQueries();
	const [showShopInfo, setShowShopInfo] = useState(false);
	const showShopInfoRef = useRef(null);

	const toggleShopInfo = () => {
		setShowShopInfo(!showShopInfo);
	};

	useOutsideClick(showShopInfoRef, toggleShopInfo, showShopInfo);

	return (
		<div className={styles.navbarHeaderWrapper}>
			{!isBigScreen && (
				<NavLink to={SHOP_ROUTE} className={styles.logo}>
					<img src={logoWhite} alt='logo' />
				</NavLink>
			)}
			<div className={styles.navbarHeader}>
				<div className={styles.shopInfo}>
					Mon-Thu:<span> 9:00 AM - 5:30 PM</span>
					<div ref={showShopInfoRef} className={styles.shopInfoPopup}>
						<img
							src={arrowDown}
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
					{isBigScreen && 'Visit our showroom in 1234 Street Adress City Address, 1234'}
					<a href='tel: (00) 1234 5678'>Contact Us</a>
				</div>
				{isBigScreen && (
					<div className={styles.contacts}>
						<span>Call Us: (00) 1234 5678</span>
						<a href='https://www.facebook.com/'>
							<img src={facebook} alt='facebook' />
						</a>
						<a href='https://www.instagram.com/'>
							<img src={instagram} alt='instagram' />
						</a>
					</div>
				)}
			</div>
		</div>
	);
};

export default NavbarHeader;
