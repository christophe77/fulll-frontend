import useSearchResponseContainer from './useSearchResponseContainer';
import styles from './SearchResponseContainer.module.css';
import UserCard from '../UserCard/UserCard';
import ActionBar from '../ActionBar/ActionBar';

export default function SearchResponseContainer() {
	const { githubUsers } = useSearchResponseContainer();
	return (
		<div className={styles.container}>
			<ActionBar />
			{githubUsers && githubUsers.length > 0 && (
				<div className={styles.cardList}>
					{githubUsers.map((user) => (
						<div key={user.id} className={styles.cardItem}>
							<UserCard user={user} />
						</div>
					))}
				</div>
			)}
		</div>
	);
}
