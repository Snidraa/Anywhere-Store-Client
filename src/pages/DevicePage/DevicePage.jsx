import { likeGray, starYellow } from '../../assets';
import styles from './DevicePage.module.scss';

const DevicePage = () => {
	const device = {
		id: 1,
		name: 'Iphone 12',
		price: 1500,
		rating: 5,
		ratesCount: 20,
		img: 'https://object.pscloud.io/cms/cms/Photo/img_0_77_2624_0_1.jpg',
	};

	return (
		<main className={styles.wrapper}>
			<div className={styles.container}>
				<p className={styles.breadcrumbs}>
					Home <span>›</span>
				</p>
				<div className={styles.content}>
					<div className={styles.box1}>
						<img src={device.img} alt='' />
						<p className={styles.ratingRow}>
							<img src={starYellow} alt='' />
							{device.rating} ({device.ratesCount})
						</p>
					</div>
					<div className={styles.box2}>
						<div className={styles.box2_Header}>
							<button className={styles.deviceItemAddToFavorite}>
								<img src={likeGray} alt='' />
							</button>
							<p className={styles.devicePrice}>
								On Sale from <span className={styles.devicePriceValue}>${device.price}</span>
							</p>
						</div>
						<div className={styles.box2_Footer}>
							<p className={styles.deviceName}>{device.name}</p>
							<div className={styles.deviceInfo}>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum suscipit quae eligendi illo, quia
								recusandae odit incidunt? Nisi voluptatibus exercitationem placeat, laudantium eos suscipit, eaque
								officia commodi expedita, voluptate facilis? Earum quisquam tempora deserunt obcaecati eum officiis
								doloremque beatae quas vitae quidem, nesciunt dicta quibusdam quis atque nostrum tenetur quos eos ipsa
								ullam dolores sint est facere. Maiores, natus incidunt!
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default DevicePage;
