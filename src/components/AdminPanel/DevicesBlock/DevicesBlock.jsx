import { useEffect, useRef } from 'react';
import styles from './DevicesBlock.module.scss';

const DevicesBlock = () => {
	const dropContainerRef = useRef(null);
	const fileInputRef = useRef(null);

	useEffect(() => {
		const dropContainer = dropContainerRef.current;
		const fileInput = fileInputRef.current;

		dropContainer.addEventListener('dragover', e => e.preventDefault(), false);

		dropContainer.addEventListener('dragenter', () => {
			dropContainer.classList.add(styles.dragActive);
		});

		dropContainer.addEventListener('dragleave', () => {
			dropContainer.classList.remove(styles.dragActive);
		});

		dropContainer.addEventListener('drop', e => {
			e.preventDefault();
			dropContainer.classList.remove(styles.dragActive);
			fileInput.files = e.dataTransfer.files;
		});
	}, []);

	return (
		<div className={styles.devicesBlock}>
			<h2>Devices</h2>
			<button>Get Devices</button>
			<input type='text' placeholder='Enter Device name' />
			<input type='number' placeholder='Enter Device price' className={styles.devicesBlock_Price} />
			<label ref={dropContainerRef} htmlFor='images' className={styles.dropContainer} id='dropcontainer'>
				<span className={styles.dropTitle}>Drop files here</span>
				or
				<input ref={fileInputRef} type='file' id='images' accept='image/*' required />
			</label>
			<button className={styles.devicesBlock_AddDeviceButton}>Add Device</button>
		</div>
	);
};

export default DevicesBlock;
