import { useContext, useState } from 'react';
import { Context } from '../../../store/Context';
import Modal from '../../Modal/Modal';
import styles from './TypesBlock.module.scss';

const TypesBlock = () => {
	const [showTypesModal, setShowTypesModal] = useState(false);
	const { device } = useContext(Context);

	return (
		<div className={styles.typesBlock}>
			<h2>Types</h2>
			<button className={styles.getButton} onClick={() => setShowTypesModal(true)}>
				Get Types
			</button>
			<form action=''>
				<input type='text' placeholder='Enter Type name' />
			</form>
			<button className={styles.addButton}>Add Type</button>
			<Modal title={'Types'} show={showTypesModal} onHide={() => setShowTypesModal(false)}>
				<ul className={styles.modalList}>
					<li className={styles.modalListItem}>
						<span>id</span>
						<span>name</span>
						<span></span>
					</li>
					{device.types.map(type => (
						<li key={type.id} className={styles.modalListItem}>
							<span>{type.id}</span>
							<span>{type.name}</span>
							<button className={styles.deleteButton}>Delete</button>
						</li>
					))}
				</ul>
			</Modal>
		</div>
	);
};

export default TypesBlock;
