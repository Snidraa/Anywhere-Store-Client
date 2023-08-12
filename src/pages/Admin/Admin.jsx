import DevicesBlock from '../../components/AdminPanel/DevicesBlock/DevicesBlock';
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
					<div className={styles.typesBlock}>
						<h2>Types</h2>
						<input type='text' placeholder='Enter Type name' />
						<button>Add Type</button>
						<button>Get Types</button>
					</div>
					<div className={styles.brandsBlock}>
						<h2>Brands</h2>
						<input type='text' placeholder='Enter Brand name' />
						<button>Add Brand</button>
						<button>Get Brands</button>
					</div>
					<DevicesBlock />
				</div>
			</div>
		</main>
	);
};

export default Admin;
