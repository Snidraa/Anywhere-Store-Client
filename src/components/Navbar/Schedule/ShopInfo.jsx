import { checkpoint, clock } from '../../../assets';
import styles from './ShopInfo.module.scss';

const ShopInfo = () => {
	return (
		<div className={styles.shopInfo}>
			<div className={styles.arrowUp}></div>
			<div className={styles.shopInfo_schedule}>
				<img src={clock} alt='' />
				<div>
					We are open:
					<p>
						<span>Mon-Thu:</span> 9:00 AM - 5:30 PM
					</p>
					<p>
						<span>Fr:</span> 9:00 AM - 6:00 PM
					</p>
					<p>
						<span>Sat:</span> 11:00 AM - 5:00 PM
					</p>
				</div>
			</div>
			<div className={styles.shopInfo_adress}>
				<img src={checkpoint} alt='' />
				Address: 1234 Street Adress, City Address, 1234
			</div>
			<div className={styles.shopInfo_contacts}>
				<p>
					Phones: <a href='tel: (00) 1234 5678'>(00) 1234 5678</a>
				</p>
				<p>
					E-mail: <a href='mailto:shop@email.com'>shop@email.com</a>
				</p>
			</div>
		</div>
	);
};

export default ShopInfo;
