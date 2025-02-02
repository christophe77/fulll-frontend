import useActionBar from './useActionBar';
import Icon from '../ui/Icon/Icon';
import styles from './ActionBar.module.css';

export default function ActionBar() {
	const {
		handleDeployClick,
		handleDuplicateClick,
		handleDeleteClick,
		selectedCount,
		userCount,
	} = useActionBar();
	return (
		<div className={styles.container}>
			{userCount === -1 && <p>Start typing to search for github user(s)</p>}
			{userCount === 0 && <p>No result</p>}
			{userCount > 0 && (
				<>
					<div className={styles.left}>
						<Icon name={'dash-square'} onClick={handleDeployClick} />
						&nbsp;
						<span>{selectedCount} elements selected</span>
					</div>
					<div className={styles.right}>
						<Icon name={'copy'} onClick={handleDuplicateClick} />
						<Icon name={'trash'} onClick={handleDeleteClick} />
					</div>
					<div className={styles.clear}></div>
				</>
			)}
		</div>
	);
}
