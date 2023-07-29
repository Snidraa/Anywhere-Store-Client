import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import DeviceList from '../../components/DeviceList/DeviceList';
import { Context } from '../../store/Context';
import styles from './Shop.module.scss';

const Shop = observer(() => {
	const { device } = useContext(Context);
	// const { user } = useContext(Context);

	return (
		<main className={styles.wrapper}>
			<div className={styles.container}>
				<h1>Welcome to Anywhere Store!</h1>
				<div>
					<div className={styles.sidebar}>
						<h3 className={styles.sidebarTitle}>Category</h3>
						<ul className={styles.sidebarMenu}>
							{device._types.map(type => (
								<li
									key={type.id}
									className={
										type.id === device.selectedType.id ? styles.sidebarMenuOptionActive : styles.sidebarMenuOption
									}
									onClick={() => device.setSelectedType(type)}
								>
									{type.name}
									<span>{type.id}</span>
								</li>
							))}
						</ul>
						<h3 className={styles.sidebarTitle}>Brands</h3>
						<ul className={styles.sidebarMenu}>
							{
								<ul>
									{device._brands.map(brand => (
										<li
											key={brand.id}
											className={
												brand.id === device.selectedBrand.id ? styles.sidebarMenuOptionActive : styles.sidebarMenuOption
											}
											onClick={() => device.setSelectedBrand(brand)}
										>
											{brand.name}
											<span>{brand.id}</span>
										</li>
									))}
								</ul>
							}
						</ul>
					</div>
					<div className={styles.content}>
						<DeviceList />
					</div>
				</div>
			</div>
		</main>
	);
});

export default Shop;
