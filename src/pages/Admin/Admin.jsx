import BrandsBlock from '../../components/AdminPanel/BrandsBlock/BrandsBlock';
import DevicesBlock from '../../components/AdminPanel/DevicesBlock/DevicesBlock';
import TypesBlock from '../../components/AdminPanel/TypesBlock/TypesBlock';
import HomeLink from '../../components/HomeLink/HomeLink';
import styles from './Admin.module.scss';

const Admin = () => {
	console.log('Admin is rendered');
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
				<div className={styles.content}>
					<TypesBlock />
					<BrandsBlock />
					{/* <div className={styles.typesBlock}>
						<h2>Types</h2>
						<button onClick={() => setShowTypesModal(true)}>Get Types</button> */}
					{/* <CSSTransition
							in={showTypesModal}
							timeout={250}
							classNames={{ enterActive: styles.modalShow, exitActive: styles.modalHide }}
							mountOnEnter
							unmountOnExit
						>
							<div className={styles.modal}>
							</div>
						</CSSTransition> */}
					{/* <form action=''>
							<input type='text' placeholder='Enter Type name' />
						</form>
						<button>Add Type</button>
						<Modal title={'Types'} data={'Data'} show={showTypesModal} onHide={() => setShowTypesModal(false)} />
					</div> */}
					{/* <div className={styles.brandsBlock}>
						<h2>Brands</h2>
						<button>Get Brands</button>
						<form action=''>
							<input type='text' placeholder='Enter Brand name' />
						</form>
						<button>Add Brand</button>
					</div> */}
					<DevicesBlock />
				</div>
			</div>
		</main>
	);
};

export default Admin;
