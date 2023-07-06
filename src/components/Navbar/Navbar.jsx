import { arrow, facebook, instagram } from '../../assets';
import styles from './Navbar.module.scss';

const Navbar = () => {
	// const { user } = useContext(Context);
	return (
		<div className={styles.navbar}>
			<div className={styles.navbar_header}>
				<div className={styles.schedule}>
					Mon-Thu:<span> 9:00 AM - 5:30 PM</span>
					<img src={arrow} alt='arrow' />
				</div>
				<div className={styles.adress}>
					Visit our showroom in 1234 Street Adress City Address, 1234
					<a href='https://www.google.com/maps'>Contact Us</a>
				</div>
				<div className={styles.contacts}>
					<span>Call Us: (00) 1234 5678</span>
					<a href='https://www.facebook.com/'>
						<img src={facebook} alt='facebook' />
					</a>
					<a href='https://www.instagram.com/'>
						<img src={instagram} alt='instagram' />
					</a>
				</div>
			</div>
			<div className={styles.navbar_footer}></div>
		</div>
	);
};

export default Navbar;
