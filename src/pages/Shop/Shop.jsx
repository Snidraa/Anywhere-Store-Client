import { observer } from 'mobx-react-lite';
import { useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useMediaQueries } from '../../Hooks/useMediaQueries';
import { useOutsideClick } from '../../Hooks/useOutsideClick';
import { crossBlack } from '../../assets';
import DeviceList from '../../components/DeviceList/DeviceList';
import SidebarList from '../../components/SidebarList/SidebarList';
import styles from './Shop.module.scss';

const Shop = observer(() => {
	const [showSidebar, setShowSidebar] = useState(false);

	const showSidebarRef = useRef(null);

	const toggleShowSidebar = () => {
		setShowSidebar(!showSidebar);
	};

	useOutsideClick(showSidebarRef, toggleShowSidebar, showSidebar);
	const { isBigScreen, isSmallScreen } = useMediaQueries();

	return (
		<main className={styles.wrapper}>
			{!isBigScreen && !isSmallScreen && (
				<CSSTransition
					in={showSidebar}
					timeout={250}
					classNames={{ enterActive: styles.mobileSidebarShow, exitActive: styles.mobileSidebarHide }}
					mountOnEnter
					unmountOnExit
				>
					<div ref={showSidebarRef} className={styles.mobileSidebar}>
						<h2>
							Filter by <img src={crossBlack} alt='close Sidebar' onClick={toggleShowSidebar} />
						</h2>
						<SidebarList />
					</div>
				</CSSTransition>
			)}
			<div className={styles.container}>
				<h1>Welcome to Anywhere Store!</h1>
				<div>
					{(isBigScreen || isSmallScreen) && (
						<div className={styles.desktopSidebar}>
							<h2>Filters</h2>
							<SidebarList />
						</div>
					)}
					<div className={styles.content}>
						<div className={styles.content_header}>
							{!isBigScreen && !isSmallScreen && (
								<button className={styles.mobileSidebarOpenButton} onClick={toggleShowSidebar}>
									Filters
								</button>
							)}
							<p>Items 1-10 of 10</p>
						</div>
						<div>
							<DeviceList />
						</div>
					</div>
				</div>
			</div>
		</main>
	);
});

export default Shop;
