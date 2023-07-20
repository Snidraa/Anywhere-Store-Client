import { search } from '../../../../assets';
import styles from './SearchArea.module.scss';

const SearchArea = () => {
	return (
		<div className={styles.area}>
			<input type='text' placeholder='Search here ...' />
			<img src={search} alt='search' />
		</div>
	);
};

export default SearchArea;
