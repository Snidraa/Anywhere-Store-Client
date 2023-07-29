import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { basketBlue, likeGray, starYellow } from '../../assets';
import { DEVICE_ROUTE } from '../../utils/consts';
import styles from './DeviceItem.module.scss';

const DeviceItem = ({ device }) => {
	const navigate = useNavigate();

	const toDevicePage = () => {
		navigate(DEVICE_ROUTE + '/' + device.id);
	};

	return (
		<div className={styles.deviceItem} onClick={toDevicePage}>
			<button className={styles.deviceItemAddToFavorite}>
				<img src={likeGray} alt='' />
			</button>
			<img src={device.img} alt='' className={styles.deviceItemImage} />
			<div className={styles.deviceItemInfo}>
				<p className={styles.deviceItemRatingRow}>
					<img src={starYellow} alt='' />
					{device.rating} ({device.ratesCount})
				</p>
				<p className={styles.deviceItemName}>{device.name}</p>
				<p className={styles.deviceItemPrice}>${device.price}</p>
			</div>
			<div className={styles.deviceItemButtons}>
				<button className={styles.deviceItemAddToCart}>
					<img src={basketBlue} alt='Add to cart' /> Add To Cart
				</button>
			</div>
		</div>
	);
};

export default DeviceItem;

DeviceItem.propTypes = {
	device: PropTypes.object,
};
