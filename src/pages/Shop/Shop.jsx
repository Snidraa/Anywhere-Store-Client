import { observer } from 'mobx-react-lite';
import { useMediaQueries } from '../../Hooks/useMediaQueries';
import DeviceList from '../../components/DeviceList/DeviceList';
import SidebarList from '../../components/SidebarList/SidebarList';
import styles from './Shop.module.scss';

const Shop = observer(() => {
	// const { device } = useContext(Context);
	// const { user } = useContext(Context);
	const { isTablet, isMobile } = useMediaQueries();

	return (
		<main className={styles.wrapper}>
			<div className={styles.container}>
				<h1>Welcome to Anywhere Store!</h1>
				<div>
					{!isTablet && !isMobile && (
						<div className={styles.sidebar}>
							<h2 className={styles.sidebarHeader}>Filters</h2>
							<SidebarList />
						</div>
					)}
					<div className={styles.contentWrapper}>
						<DeviceList />
					</div>
				</div>
			</div>
		</main>
	);
});

export default Shop;
