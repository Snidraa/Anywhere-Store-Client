import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Context } from '../../store/Context';
import Dropdown from '../Dropdown/Dropdown';
import styles from './SidebarList.module.scss';

const SidebarList = observer(() => {
	const { device } = useContext(Context);

	return (
		<div className={styles.sidebarList}>
			<Dropdown title={'Category'} optionHeight={28}>
				{device.types.map(type => (
					<li
						key={type.id}
						className={type.id === device.selectedType.id ? styles.sidebarListOptionActive : styles.sidebarListOption}
						onClick={() => device.setSelectedType(type)}
					>
						{type.name}
						<span>{type.id}</span>
					</li>
				))}
			</Dropdown>
			<Dropdown title={'Brands'} optionHeight={28}>
				{device.brands.map(brand => (
					<li
						key={brand.id}
						className={brand.id === device.selectedBrand.id ? styles.sidebarListOptionActive : styles.sidebarListOption}
						onClick={() => device.setSelectedBrand(brand)}
					>
						{brand.name}
						<span>{brand.id}</span>
					</li>
				))}
			</Dropdown>
		</div>
	);
});

export default SidebarList;
