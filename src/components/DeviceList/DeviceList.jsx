import { observer } from 'mobx-react-lite';
import { useContext, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useMediaQueries } from '../../Hooks/useMediaQueries';
import { useOutsideClick } from '../../Hooks/useOutsideClick';
import { crossBlack } from '../../assets';
import { Context } from '../../store/Context';
import DeviceItem from '../DeviceItem/DeviceItem';
import SidebarList from '../SidebarList/SidebarList';
import styles from './DeviceList.module.scss';

const DeviceList = observer(() => {
	const { device } = useContext(Context);
	const [showSidebar, setShowSidebar] = useState(false);
	const { isBigScreen, isSmallScreen } = useMediaQueries();

	const showSidebarRef = useRef(null);

	const toggleShowSidebar = () => {
		setShowSidebar(!showSidebar);
	};

	useOutsideClick(showSidebarRef, toggleShowSidebar, showSidebar);

	return (
		<>
			{!isBigScreen && !isSmallScreen && (
				<CSSTransition
					in={showSidebar}
					timeout={250}
					classNames={{ enterActive: styles.deviceListSidebarShow, exitActive: styles.deviceListSidebarHide }}
					mountOnEnter
					unmountOnExit
				>
					<div ref={showSidebarRef} className={styles.deviceListSidebar}>
						<h2>
							Filter by <img src={crossBlack} alt='close Sidebar' onClick={toggleShowSidebar} />
						</h2>
						<SidebarList />
					</div>
				</CSSTransition>
			)}
			<div className={styles.deviceList}>
				<div className={styles.deviceListControl}>
					{!isBigScreen && !isSmallScreen && (
						<div className={styles.deviceListControl_SidebarOpenButton} onClick={toggleShowSidebar}>
							Filters
						</div>
					)}
					<p>Items 1-10 of 10</p>
				</div>
				<div className={styles.deviceListContent}>
					{device._devices.map(device => (
						<DeviceItem key={device.id} device={device} />
					))}
				</div>
			</div>
		</>
	);
});

export default DeviceList;
