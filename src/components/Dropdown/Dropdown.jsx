import { useState } from 'react';
import { arrowDownWhite } from '../../assets';
import styles from './Dropdown.module.scss';

const Dropdown = props => {
	const { title, height, children } = { ...props };
	const [showList, setShowList] = useState(true);

	const toggleList = () => {
		setShowList(!showList);
	};

	return (
		<div className={styles.dropdown}>
			<h3 className={styles.dropdownTitle} onClick={toggleList}>
				{title} <img src={arrowDownWhite} alt='' className={showList ? styles.arrowUp : styles.arrowDown} />
			</h3>
			<div
				style={
					showList
						? { height: height, transition: 'height 0.25s ease-in-out' }
						: { height: 0, transition: 'height 0.25s ease-in-out' }
				}
			>
				{children}
			</div>
		</div>
	);
};

export default Dropdown;
