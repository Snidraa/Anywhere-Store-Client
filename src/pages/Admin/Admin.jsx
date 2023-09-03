import { useState } from 'react';
import BrandsBlock from '../../components/AdminPanel/BrandsBlock/BrandsBlock';
import DevicesBlock from '../../components/AdminPanel/DevicesBlock/DevicesBlock';
import TypesBlock from '../../components/AdminPanel/TypesBlock/TypesBlock';
import HomeLink from '../../components/HomeLink/HomeLink';
import styles from './Admin.module.scss';

const Admin = () => {
	console.log('Admin is rendered');
	const [showTypesBlock, setShowTypesBlock] = useState(false);
	const [showBrandsBlock, setShowBrandsBlock] = useState(false);
	const [showDevicesBlock, setShowDevicesBlock] = useState(false);

	const toggleTypesBlock = () => {
		if (showBrandsBlock) toggleBrandsBlock();
		if (showDevicesBlock) toggleDevicesBlock();
		setShowTypesBlock(!showTypesBlock);
	};

	const toggleBrandsBlock = () => {
		if (showTypesBlock) toggleTypesBlock();
		if (showDevicesBlock) toggleDevicesBlock();
		setShowBrandsBlock(!showBrandsBlock);
	};

	const toggleDevicesBlock = () => {
		if (showTypesBlock) toggleTypesBlock();
		if (showBrandsBlock) toggleBrandsBlock();
		setShowDevicesBlock(!showDevicesBlock);
	};
	// const [showTypesModal, setShowTypesModal] = useState(false);
	// const [showBrandsModal, setShowBrandsModal] = useState(false);
	// const { device } = useContext(Context);
	// const typesOptions = device.types.map(type => ({
	// 	value: type.name,
	// 	label: type.name,
	// }));

	return (
		<main className={styles.wrapper}>
			<div className={styles.container}>
				<p className={styles.breadcrumbs}>
					<HomeLink /> <span>›</span> Admin Panel
				</p>
				<div className={styles.controls}>
					<button onClick={toggleTypesBlock}>Types</button>
					<button onClick={toggleBrandsBlock}>Brands</button>
					<button onClick={toggleDevicesBlock}>Devices</button>
				</div>
				<div className={styles.content}>
					{showTypesBlock && <TypesBlock />}
					{showBrandsBlock && <BrandsBlock />}
					{showDevicesBlock && <DevicesBlock />}
				</div>
			</div>
		</main>
	);
};

export default Admin;
