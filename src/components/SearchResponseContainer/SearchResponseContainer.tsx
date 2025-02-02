import useSearchResponseContainer from './useSearchResponseContainer';
import styles from './SearchResponseContainer.module.css';
import UserCard from '../UserCard/UserCard';
import ActionBar from '../ActionBar/ActionBar';

export default function SearchResponseContainer() {
	const { githubUsers, userCount } = useSearchResponseContainer();
	return (
		<div className={styles.container}>
			{/* Start : Move to Actionbar */}
			{userCount === -1 && <p>Start typing to get github user list</p>}
			{userCount === 0 && <p>No result</p>}
			{userCount > 0 && <ActionBar />}
			{/* End : Move to Actionbar */}
			<div className={styles.cardList}>
				{githubUsers?.map((user) => (
					<div key={user.id} className={styles.cardItem}>
						<UserCard user={user} />
					</div>
				))}
			</div>
		</div>
	);
}
