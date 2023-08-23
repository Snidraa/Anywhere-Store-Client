import { useContext, useEffect, useRef, useState } from 'react';
import Select from 'react-select';
import { Context } from '../../../store/Context';
import Modal from '../../Modal/Modal';
import styles from './DevicesBlock.module.scss';

const DevicesBlock = () => {
	const { device } = useContext(Context);
	const [showDevicesModal, setShowDevicesModal] = useState(false);
	const dropContainerRef = useRef(null);
	const fileInputRef = useRef(null);
	const typeSelectorRef = useRef(null);
	const brandSelectorRef = useRef(null);

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

	// const showValues = () => {
	// 	console.log(typeSelectorRef.current);

	// 	console.log('Types value:', typeSelectorRef.current?.value);
	// 	console.log('Brands value: ', brandSelectorRef.current?.value);
	// };

	const handleChange = (value, name) => {
		if (name.name === 'Types') {
			typeSelectorRef.current.value = value;
			console.log('Type:', typeSelectorRef.current.value?.value);
		}
		if (name.name === 'Brands') {
			brandSelectorRef.current.value = value;
			console.log('Brand: ', brandSelectorRef.current.value?.value);
		}
	};

	const selectorStyles = {
		control: styles => ({ ...styles, backgroundColor: 'white', width: '100%', cursor: 'pointer' }),
		option: (styles, { isDisabled, isFocused, isSelected }) => {
			return {
				...styles,
				background: isDisabled ? undefined : isSelected ? '#0156ff' : isFocused ? 'rgba(#0156ff, 0.2)' : '#fff',
				color: isDisabled ? '#ccc' : isSelected ? '#fff' : isFocused ? '#000' : '#000',
				cursor: 'pointer',

				':active': {
					...styles[':active'],
					background: !isDisabled ? (isSelected ? undefined : '#0156ff') : '#0156ff',
					color: !isDisabled ? (isSelected ? undefined : '#fff') : '#fff',
				},
			};
		},
		input: styles => ({ ...styles }),
		placeholder: styles => ({ ...styles }),
		singleValue: styles => ({ ...styles }),
	};

	return (
		<div className={styles.devicesBlock}>
			<h2>Devices</h2>
			<button onClick={() => setShowDevicesModal(true)}>Get Devices</button>
			<form action='submit' className={styles.addDeviceFrom}>
				<div className={styles.selectors}>
					<Select
						ref={typeSelectorRef}
						name={'Types'}
						className={styles.select}
						placeholder={'Select Type...'}
						options={device.types.map(type => ({
							value: type.name,
							label: type.name,
						}))}
						styles={selectorStyles}
						isSearchable
						isClearable={() => typeSelectorRef.current.clearValue()}
						onChange={handleChange}
					/>
					<Select
						ref={brandSelectorRef}
						name={'Brands'}
						className={styles.select}
						placeholder={'Select Brand...'}
						options={device.brands.map(brand => ({
							value: brand.name,
							label: brand.name,
						}))}
						styles={selectorStyles}
						isSearchable
						isClearable={() => brandSelectorRef.current.clearValue()}
						onChange={handleChange}
					/>
				</div>
				<input type='text' placeholder='Enter Device name' />
				<input type='number' placeholder='Enter Device price' className={styles.devicesBlock_Price} />
				<label ref={dropContainerRef} htmlFor='images' className={styles.dropContainer} id='dropcontainer'>
					<span className={styles.dropTitle}>Drop files here</span>
					or
					<input ref={fileInputRef} type='file' id='images' accept='image/*' required />
				</label>
			</form>

			<button className={styles.devicesBlock_AddDeviceButton}>Add Device</button>
			<Modal title={'Devices'} show={showDevicesModal} onHide={() => setShowDevicesModal(false)}>
				<ul className={styles.modalList}>
					<li className={styles.modalListItem}>
						<span>id</span>
						<span>name</span>
						<span>price</span>
						<span></span>
					</li>
					{device.devices.map(device => (
						<li key={device.id} className={styles.modalListItem}>
							<span>{device.id}</span>
							<span>{device.name}</span>
							<span>{device.price}</span>
							<button>Delete</button>
						</li>
					))}
				</ul>
			</Modal>
		</div>
	);
};

export default DevicesBlock;
