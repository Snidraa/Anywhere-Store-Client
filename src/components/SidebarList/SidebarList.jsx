import { observer } from 'mobx-react-lite';
import { useContext, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { arrowDown } from '../../assets';
import { Context } from '../../store/Context';
import styles from './SidebarList.module.scss';

const SidebarList = observer(() => {
	const { device } = useContext(Context);
	const [showTypesList, setShowTypesList] = useState(true);
	const [showBrandsList, setShowBrandsList] = useState(true);

	const toggleTypesList = () => {
		setShowTypesList(!showTypesList);
	};

	const toggleBrandsList = () => {
		setShowBrandsList(!showBrandsList);
	};

	return (
		<div className={styles.sidebarList}>
			<div className={styles.sidebarListItem}>
				<h3 className={styles.sidebarListItemTitle} onClick={toggleTypesList}>
					Category <img src={arrowDown} alt='' className={showTypesList ? styles.arrow : styles.arrowDown} />
				</h3>
				<CSSTransition
					in={showTypesList}
					timeout={250}
					classNames={{ enterActive: styles.listShow, exitActive: styles.listHide }}
					mountOnEnter
					unmountOnExit
				>
					<ul className={styles.sidebarListItemMenu}>
						{device._types.map(type => (
							<li
								key={type.id}
								className={
									type.id === device.selectedType.id
										? styles.sidebarListItemMenuOptionActive
										: styles.sidebarListItemMenuOption
								}
								onClick={() => device.setSelectedType(type)}
							>
								{type.name}
								<span>{type.id}</span>
							</li>
						))}
					</ul>
				</CSSTransition>
			</div>
			<div className={styles.sidebarListItem}>
				<h3 className={styles.sidebarListItemTitle} onClick={toggleBrandsList}>
					Brands <img src={arrowDown} alt='' className={showBrandsList ? styles.arrow : styles.arrowDown} />
				</h3>
				<CSSTransition
					in={showBrandsList}
					timeout={250}
					classNames={{ enterActive: styles.listShow, exitActive: styles.listHide }}
					mountOnEnter
					unmountOnExit
				>
					<ul className={styles.sidebarListItemMenu}>
						{device._brands.map(brand => (
							<li
								key={brand.id}
								className={
									brand.id === device.selectedBrand.id
										? styles.sidebarListItemMenuOptionActive
										: styles.sidebarListItemMenuOption
								}
								onClick={() => device.setSelectedBrand(brand)}
							>
								{brand.name}
								<span>{brand.id}</span>
							</li>
						))}
					</ul>
				</CSSTransition>
			</div>
		</div>
	);
});

export default SidebarList;
