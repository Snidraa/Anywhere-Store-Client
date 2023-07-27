import { useContext } from 'react';
import { galleryWiewActive, listWiewInActive, starYellow } from '../../assets';
import { Context } from '../../store/Context';
import styles from './DeviceList.module.scss';

const DeviceList = () => {
	const { device } = useContext(Context);

	return (
		<>
			<div className={styles.control}>
				<p>Items 1-10 of 10</p>
				<div>
					<img src={galleryWiewActive} alt='' />
					<img src={listWiewInActive} alt='' />
				</div>
			</div>
			<div className={styles.deviceList}>
				{device._devices.map(device => (
					<div key={device.id} className={styles.deviceItem}>
						<img src={device.img} alt='' className={styles.deviceItemImage} />
						<div className={styles.deviceItemInfo}>
							<p className={styles.deviceItemRatingRow}>
								<img src={starYellow} alt='' />
								{device.rating} ({device.ratesCount})
							</p>
							<p className={styles.deviceItemName}>{device.name}</p>
							<p className={styles.deviceItemPrice}>${device.price}</p>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default DeviceList;
