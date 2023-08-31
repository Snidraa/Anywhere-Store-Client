import { useContext, useState } from 'react';
import { Context } from '../../../store/Context';
import Modal from '../../Modal/Modal';
import styles from './BrandsBlock.module.scss';

const BrandsBlock = () => {
	const [showBrandsModal, setShowBrandsModal] = useState(false);
	const { device } = useContext(Context);

	return (
		<div className={styles.brandsBlock}>
			<h2>Brands</h2>
			<button className={styles.getButton} onClick={() => setShowBrandsModal(true)}>
				Get brands
			</button>
			<form action=''>
				<input type='text' placeholder='Enter brand name' />
			</form>
			<button className={styles.addButton}>Add brand</button>
			<Modal title={'Brands'} show={showBrandsModal} onHide={() => setShowBrandsModal(false)}>
				<ul className={styles.modalList}>
					<li className={styles.modalListItem}>
						<span>id</span>
						<span>name</span>
						<span></span>
					</li>
					{device.brands.map(brand => (
						<li key={brand.id} className={styles.modalListItem}>
							<span>{brand.id}</span>
							<span>{brand.name}</span>
							<button className={styles.deleteButton}>Delete</button>
						</li>
					))}
				</ul>
			</Modal>
		</div>
	);
};

export default BrandsBlock;
