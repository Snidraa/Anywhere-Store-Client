import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { arrowDownWhite } from '../../assets';
import styles from './Dropdown.module.scss';

const Dropdown = observer(props => {
	const [showList, setShowList] = useState(true);

	const toggleList = () => {
		setShowList(!showList);
	};

	return (
		<div className={styles.dropdown}>
			<h3 className={styles.dropdownTitle} onClick={toggleList}>
				{props.title} <img src={arrowDownWhite} alt='' className={showList ? styles.arrow : styles.arrowDown} />
			</h3>
			<CSSTransition
				in={showList}
				timeout={250}
				classNames={{ enterActive: styles.dropdownListShow, exitActive: styles.dropdownListHide }}
				mountOnEnter
				unmountOnExit
			>
				{props.children}
				{/* <ul className={styles.sidebarListItemMenu}>
					{props.items?.map(item => (
						<li
							key={item.id}
							className={
								item.id === device.selectedType.id
									? styles.sidebarListItemMenuOptionActive
									: styles.sidebarListItemMenuOption
							}
							onClick={() => setSelected(item, props.context)}
						>
							{item.name}
							<span>{item.id}</span>
						</li>
					))}
				</ul> */}
			</CSSTransition>
		</div>
	);
});

export default Dropdown;
