import useActionBar from './useActionBar';
import Icon from '../ui/Icon/Icon';
import Checkbox from '../ui/Checkbox/Checkbox';
import styles from './ActionBar.module.css';

export default function ActionBar() {
	const {
		handleSelectAllClick,
		handleDuplicateClick,
		handleDeleteClick,
		selectedCount,
		userCount,
		allIsSelected,
	} = useActionBar();
	return (
		<div className={styles.container}>
			{userCount === -1 && <p>Start typing to search for github user(s)</p>}
			{userCount === 0 && <p>No result</p>}
			{userCount > 0 && (
				<>
					<span className={styles.left}>
						<Checkbox checked={allIsSelected} onClick={handleSelectAllClick} />
						{`${selectedCount} elements selected`}
					</span>

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
