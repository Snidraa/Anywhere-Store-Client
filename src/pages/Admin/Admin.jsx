import HomeLink from '../../components/HomeLink/HomeLink';
import styles from './Admin.module.scss';

const Admin = () => {
	return (
		<main className={styles.wrapper}>
			<div className={styles.container}>
				<p className={styles.breadcrumbs}>
					<HomeLink /> <span>›</span> Admin Panel
				</p>
				<div className={styles.content}>
					<div>Admin</div>
				</div>
			</div>
		</main>
	);
};

export default Admin;
