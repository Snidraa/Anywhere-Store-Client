import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useOutsideClick } from '../../Hooks/useOutsideClick';
import { crossBlack } from '../../assets';
import styles from './Modal.module.scss';

const Modal = props => {
	const { title, children, show, onHide } = { ...props };
	const modalRef = useRef(null);
	useOutsideClick(modalRef, onHide, show);

	return (
		<CSSTransition
			in={show}
			timeout={250}
			classNames={{ enterActive: styles.modalShow, exitActive: styles.modalHide }}
			mountOnEnter
			unmountOnExit
		>
			<div ref={modalRef} className={styles.modal}>
				<div className={styles.container}>
					<div className={styles.header}>
						<h3>{title}</h3>
						<img src={crossBlack} alt='' onClick={onHide} />
					</div>
					{children}
				</div>
			</div>
		</CSSTransition>
	);
};

export default Modal;
