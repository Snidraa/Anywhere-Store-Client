import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Context } from '../../store/Context';
import Dropdown from '../Dropdown/Dropdown';
import styles from './SidebarList.module.scss';

const SidebarList = observer(() => {
	const { device } = useContext(Context);
	return (
		<div className={styles.sidebarList}>
			<Dropdown title={'Category'}>
				<ul className={styles.sidebarListDropdownMenu}>
					{device.types.map(type => (
						<li
							key={type.id}
							className={
								type.id === device.selectedType.id
									? styles.sidebarListDropdownMenuOptionActive
									: styles.sidebarListDropdownMenuOption
							}
							onClick={() => device.setSelectedType(type)}
						>
							{type.name}
							<span>{type.id}</span>
						</li>
					))}
				</ul>
			</Dropdown>
			<Dropdown title={'Brands'}>
				<ul className={styles.sidebarListDropdownMenu}>
					{device.brands.map(brand => (
						<li
							key={brand.id}
							className={
								brand.id === device.selectedBrand.id
									? styles.sidebarListDropdownMenuOptionActive
									: styles.sidebarListDropdownMenuOption
							}
							onClick={() => device.setSelectedBrand(brand)}
						>
							{brand.name}
							<span>{brand.id}</span>
						</li>
					))}
				</ul>
			</Dropdown>
		</div>
	);
});

export default SidebarList;
