import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { galleryWiewActive, listWiewInActive } from '../../assets';
import { Context } from '../../store/Context';
import DeviceItem from '../DeviceItem/DeviceItem';
import styles from './DeviceList.module.scss';

const DeviceList = observer(() => {
	const { device } = useContext(Context);

	return (
		<div className={styles.deviceList}>
			<div className={styles.deviceListControl}>
				<p>Items 1-10 of 10</p>
				<div>
					<img src={galleryWiewActive} alt='' />
					<img src={listWiewInActive} alt='' />
				</div>
			</div>
			<div className={styles.deviceListContent}>
				{device._devices.map(device => (
					<DeviceItem key={device.id} device={device} />
				))}
			</div>
		</div>
	);
});

export default DeviceList;
