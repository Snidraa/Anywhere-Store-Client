import { useHeadingsData } from '../../Hooks/useHeadingData';
import styles from './TableOfContents.module.scss';

const TableOfContents = () => {
	const { nestedHeadings } = useHeadingsData('h3');

	return (
		<nav aria-label='Table of contents' className={styles.container}>
			<ul>
				{nestedHeadings.map(heading => (
					<li key={heading.id}>
						<a
							href={`#${heading.id}`}
							onClick={e => {
								e.preventDefault();
								document.querySelector(`#${heading.id}`).scrollIntoView({ behavior: 'smooth' });
							}}
						>
							{heading.title}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default TableOfContents;
