import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE } from '../../utils/consts';
import styles from './HomeLink.module.scss';

const HomeLink = () => {
	return (
		<NavLink to={SHOP_ROUTE} className={styles.homeLink}>
			Home
		</NavLink>
	);
};

export default HomeLink;
