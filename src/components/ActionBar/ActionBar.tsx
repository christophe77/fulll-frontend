import useActionBar from './useActionBar';
import Icon from '../ui/Icon/Icon';
import styles from './ActionBar.module.css';

export default function ActionBar() {
	const { handleDeployClick, handleCopyClick, handleDeleteClick } = useActionBar();
	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<Icon
					name={'dash-square'}
					onClick={handleDeployClick}
				/>&nbsp;
				<span>3 elements selected</span>
			</div>
			<div className={styles.right}>
				<Icon
					name={'copy'}
					onClick={handleCopyClick}
				/>
				<Icon
					name={'trash'}
					onClick={handleDeleteClick}
				/>
			</div>
			<div className={styles.clear}></div>
		</div>
	);
}
