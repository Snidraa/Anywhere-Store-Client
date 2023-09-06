import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import styles from './Basket.module.scss';

const Basket = () => {
	return (
		<main className={styles.wrapper}>
			<div className={styles.container}>
				<Breadcrumbs pathname='Shopping Cart' />
				<h1>Shopping Cart</h1>
				<div className={styles.content}>
					<div className={styles.a}></div>
					<div className={styles.b}></div>
				</div>
			</div>
		</main>
	);
};

export default Basket;
