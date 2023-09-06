import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { arrowDownWhite } from '../../assets';
import styles from './Dropdown.module.scss';

const Dropdown = props => {
	const { title, children } = { ...props };
	const [showList, setShowList] = useState(true);

	const toggleList = () => {
		setShowList(!showList);
	};

	return (
		<div className={styles.dropdown}>
			<h3 className={styles.dropdownTitle} onClick={toggleList}>
				{title} <img src={arrowDownWhite} alt='' className={showList ? styles.arrow : styles.arrowDown} />
			</h3>
			<CSSTransition
				in={showList}
				timeout={250}
				classNames={{ enterActive: styles.dropdownListShow, exitActive: styles.dropdownListHide }}
				mountOnEnter
				unmountOnExit
			>
				{children}
			</CSSTransition>
		</div>
	);
};

export default Dropdown;
