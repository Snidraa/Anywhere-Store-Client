import { useState } from 'react';
import { BlueButton } from '../Buttons';
import Modal from '../Modal/Modal';
import Rating from '../Rating/Rating';
import styles from './Reviews.module.scss';

const Reviews = id => {
	const deviceId = id;
	const reviews = [
		{
			postId: 1,
			id: 1,
			rating: 4,
			name: 'id labore ex et quam laborum',
			email: 'Eliseo@gardner.biz',
			body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
		},
		{
			postId: 1,
			id: 2,
			rating: 5,
			name: 'quo vero reiciendis velit similique earum',
			email: 'Jayne_Kuhic@sydney.com',
			body: 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et',
		},
		{
			postId: 1,
			id: 3,
			rating: 5,
			name: 'odio adipisci rerum aut animi',
			email: 'Nikita@garfield.biz',
			body: 'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione',
		},
		{
			postId: 1,
			id: 4,
			rating: 5,
			name: 'alias odio sit',
			email: 'Lew@alysha.tv',
			body: 'non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati',
		},
		{
			postId: 1,
			id: 5,
			rating: 3,
			name: 'vero eaque aliquid doloribus et culpa',
			email: 'Hayden@althea.biz',
			body: 'harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et',
		},
	];
	const [rating, setRating] = useState(0);
	const [showReviewsModal, setShowReviewsModal] = useState(false);

	const addReview = () => {};

	return (
		<div className={styles.reviews}>
			<Modal title={'Review'} show={showReviewsModal} onHide={() => setShowReviewsModal(false)}>
				<div className={styles.modal}>
					<Rating rating={rating} setRating={setRating} />
					<textarea placeholder='Type Review' rows={10} />
					<BlueButton onClick={() => addReview()}>Add Review</BlueButton>
				</div>
			</Modal>
			<div className={styles.reviews_header}>
				<h2>Reviews</h2>
				<BlueButton onClick={() => setShowReviewsModal(true)}>Add Review</BlueButton>
			</div>
			<div className={styles.reviews_content}>
				{reviews ? (
					<>
						{reviews.map(review => (
							<article key={review.id} className={styles.reviews_item}>
								{review.name ? (
									<div className={styles.reviews_itemHeader}>
										<p className={styles.reviews_itemName}>{review.name}</p>
										<Rating rating={review.rating} type={'indicator'} />
									</div>
								) : (
									<div className={styles.reviews_itemHeader}>
										<p className={styles.reviews_itemName}>{review.email}</p>
										<Rating rating={rating} setRating={setRating} />
									</div>
								)}
								<p className={styles.reviews_itemContent}>{review.body}</p>
							</article>
						))}
					</>
				) : (
					<h3>There is no reviews</h3>
				)}
			</div>
		</div>
	);
};

export default Reviews;
