import useSearchResponseContainer from './useSearchResponseContainer';
import styles from './SearchResponseContainer.module.css';
import UserCard from '../UserCard/UserCard';

export default function SearchResponseContainer() {
	const { githubUsers } = useSearchResponseContainer();
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Results</h2>
			<div className={styles.cardList}>
				{githubUsers?.map((user) => (
					<UserCard key={user.id} user={user} />
				))}
			</div>
		</div>
	);
}
