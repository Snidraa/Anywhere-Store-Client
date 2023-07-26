import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Context } from '../../store/Context';
import styles from './Shop.module.scss';

const Shop = observer(() => {
	const { device } = useContext(Context);
	// const { user } = useContext(Context);

	return (
		<main className={styles.wrapper}>
			<div className={styles.container}>
				<p className={styles.breadcrumbs}>Home</p>
				<h1>Welcome to Anywhere Store!</h1>
				<div className={styles.content}>
					<div className={styles.sidebar}>
						<h3>Category</h3>
						<ul>
							{device._types.map(type => (
								<li
									key={type.id}
									className={type.id === device.selectedType.id ? styles.active : ''}
									onClick={() => device.setSelectedType(type)}
								>
									{type.name}
									<span>{type.id}</span>
								</li>
							))}
						</ul>
						<h3>Brands</h3>
						<ul>
							{
								<ul>
									{device._brands.map(brand => (
										<li
											key={brand.id}
											className={brand.id === device.selectedBrand.id ? styles.active : ''}
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
					<div></div>
				</div>
			</div>
		</main>
	);
});

export default Shop;
