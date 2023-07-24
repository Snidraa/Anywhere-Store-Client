import { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { useOutsideClick } from '../../../../Hooks/useOutsideClick';
import { arrowRight, burger, crossBlack, logoBlue } from '../../../../assets';
import { SHOP_ROUTE } from '../../../../utils/consts';
import styles from './BurgerMenu.module.scss';
const BurgerMenu = () => {
	const [showBurgerMenu, setShowBurgerMenu] = useState(false);
	const showBurgerMenuRef = useRef(null);

	const toggleBurgerMenu = () => {
		setShowBurgerMenu(!showBurgerMenu);
	};

	useOutsideClick(showBurgerMenuRef, toggleBurgerMenu, showBurgerMenu);

	return (
		<>
			<img src={burger} alt='burger' className={styles.burger} onClick={toggleBurgerMenu} />
			<CSSTransition
				in={showBurgerMenu}
				timeout={250}
				classNames={{ enterActive: styles.menuShow, exitActive: styles.menuHide }}
				mountOnEnter
				unmountOnExit
			>
				<div className={styles.menu} ref={showBurgerMenuRef}>
					<div className={styles.menuHeader}>
						<NavLink to={SHOP_ROUTE}>
							<img src={logoBlue} alt='logo' className={styles.logo} />
						</NavLink>
						<img src={crossBlack} alt='close' onClick={toggleBurgerMenu} />
					</div>
					<ul>
						<li>
							<a href=''>
								Laptops <img src={arrowRight} alt='arrowRight' />
							</a>
						</li>
						<li>
							<a href=''>
								Desktop PCs <img src={arrowRight} alt='arrowRight' />
							</a>
						</li>
						<li>
							<a href=''>
								Networking Devices <img src={arrowRight} alt='arrowRight' />
							</a>
						</li>
						<li>
							<a href=''>
								Printers & Scanners <img src={arrowRight} alt='arrowRight' />
							</a>
						</li>
						<li>
							<a href=''>
								PC Parts <img src={arrowRight} alt='arrowRight' />
							</a>
						</li>
						<li>
							<a href=''>
								All Other Products <img src={arrowRight} alt='arrowRight' />
							</a>
						</li>
					</ul>
				</div>
			</CSSTransition>
		</>
	);
};

export default BurgerMenu;
