import { search_open } from '../../../assets';
import styles from './SearchArea.module.scss';

const SearchArea = () => {
	return (
		<div className={styles.area}>
			<input type='text' placeholder='Search entire store here ...' />
			<img src={search_open} alt='' />
		</div>
	);
};

export default SearchArea;
